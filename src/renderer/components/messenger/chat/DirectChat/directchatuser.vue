<template>
  <!--Direct Chat User start -->
  <div>
    <div class="search2">
      <!-- <div>
        <div class="input-group">
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Search" />
        </div>
      </div> -->
    </div>
    <li
      :class="{ active: sessionroom === user.sessionid }"
      v-for="(user, index) in currentRoom.room"
      :key="index"
    
      @click="
        setActive(index),
          setActiveuser(user.id),
          setSeesionuser(user.sessionid),
          setChatuser(user.sessionid, user.roomtype),
          readMessage(user.sessionid)
      "
    >
      
      <div class="chat-box">
        <div class="media">
          <div
            class="profile"
            :style="
              user.sessiontype == 'CHAT'
                ? user.user.avatar != 'null'
                  ? [
                      {
                        'background-image': 'url(' + user.user.avatar + ')',
                      },
                      styleObject,
                    ]
                  : [
                      {
                        'background-image':
                          'url(/_nuxt/src/renderer/assets/images/media/1.jpg)',
                      },
                      styleObject,
                    ]
                : user.sessiontype == 'GROUP'
                ? user.groupavatar.source
                  ? [
                      {
                        'background-image':
                          'url(' + user.groupavatar.source + ')',
                      },
                      styleObject,
                    ]
                  : [
                      {
                        'background-image':
                          'url(/_nuxt/src/renderer/assets/images/media/1.jpg)',
                      },
                      styleObject,
                    ]
                : [
                    {
                      'background-image':
                        'url(/_nuxt/src/renderer/assets/images/media/1.jpg)',
                    },
                    styleObject,
                  ]
            "
          ></div>
          <div class="details">
            <h5>
              {{
                user.sessiontype == "CHAT"
                  ? user.user.displayName
                  : user.sessiontype == "GROUP"
                  ? user.groupname
                  : ""
              }}
            </h5>
            <h6>{{ user.lastmessage }}</h6>
          </div>
          <div class="date-status">
            <span
              class="unreadcount"
              v-if="user.unreadcount > 0 && sessionroom != user.sessionid"
            >
              {{ user.unreadcount }}
            </span>
          </div>
          
          
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";
import Vue from 'vue'
export default {
  data() {
    return {
      activeIndex: null,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      chatUser: [],
      
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      profile: (state) => state.auth.profile,
      sessionroom: (state) => state.chat.session,
      roomtype: (state) => state.room.roomtype,
      currentRoom() {
        return (this.chatUser = this.$store.getters["room/currentRoom"]);
      },
    }),
  },
  methods: {
    

    setChatuser: function (sessionid) {
      this.getdataDB.then((data) => {
        let lastshowtime = data
          .objects("ROOM")
          .filtered(`sessionid == "${sessionid}"`);
        let msg = data
          .objects("MESSAGE")
          .filtered(
            `sessionid == "${sessionid}" AND  createdtime <= "${lastshowtime[0].showtime}" `
          );
        let arr = [];
        this.$store.state.chat.messagelength = 50;
        if (msg.length < this.$store.state.chat.messagelength) {
          this.$store.dispatch("chat/setChat", msg);
        } else {
          for (
            let i = msg.length - 1;
            i > msg.length - this.$store.state.chat.messagelength;
            i--
          ) {
            arr.push(msg[i]);
          }
          this.$store.dispatch("chat/setChat", arr.reverse());
        }
        if (this.roomtype == "official") {
          let unreadtime = data
            .objects("MESSAGE")
            .filtered(
              `sessionid == "${sessionid}" AND status == "SENT" AND oaid != "${this.profile.id}"`
            );
          if (unreadtime.length) {
            this.$store.dispatch(
              "chat/setUnreadtime",
              unreadtime[0].createdtime
            );
            this.$store.dispatch(
              "chat/setMessagefirstunread",
              unreadtime[0].messageid
            );
          } else {
            this.$store.dispatch("chat/setUnreadtime", null);
            this.$store.dispatch("chat/setMessagefirstunread", null);
          }
        } else {
          let unreadtime = data
            .objects("MESSAGE")
            .filtered(
              `sessionid == "${sessionid}" AND status == "SENT" AND senderid != "${this.profile.id}"`
            );
          if (unreadtime.length) {
            this.$store.dispatch(
              "chat/setUnreadtime",
              unreadtime[0].createdtime
            );
            this.$store.dispatch(
              "chat/setMessagefirstunread",
              unreadtime[0].messageid
            );
          } else {
            this.$store.dispatch("chat/setUnreadtime", null);
            this.$store.dispatch("chat/setMessagefirstunread", null);
          }
        }
      });
      this.addDataToRealm(this.profile, "updateUnreadcount");
      this.addDataToRealm(this.profile, "updateLastmessage");
      setTimeout(() => {
        this.setRooms();
      }, 50);
      setTimeout(() => {
        if (document.querySelector(".unreadmessage")) {
          const contain = document.querySelector(".scrolltopdirectchat");
          contain.scrollTop =
            document.querySelector(".unreadmessage").offsetTop - 200;
        } else {
          const contain = document.querySelector(".scrolltopdirectchat");
          contain.scrollTop = contain.scrollHeight;
        }
      }, 10);
    },
    setSeesionuser: function (sessionid) {
      this.$store.dispatch("chat/setSessionChat", sessionid);
    },
    readMessage: function (sessionid) {
      //check if
      if (this.roomtype == "official") {
        this.getdataDB.then((data) => {
          let lastmsg = data
            .objects("MESSAGE")
            .filtered(
              ` sessionid == "${sessionid}" AND oaid != "${this.profile.id}" AND status == "SENT"`
            );
          if (lastmsg[0]) {
            this.$socket.emit(
              "messages:read",
              `{"sessionId": "${sessionid}","readTime":"${lastmsg[0].createdtime}"}`
            );
          }
        });
      } else {
        this.getdataDB.then((data) => {
          let lastmsg = data
            .objects("MESSAGE")
            .filtered(
              ` sessionid == "${sessionid}" AND senderid != "${this.profile.id}" AND status == "SENT"`
            );
          if (lastmsg[0]) {
            this.$socket.emit(
              "messages:read",
              `{"sessionId": "${sessionid}","readTime":"${lastmsg[0].createdtime}"}`
            );
          }
        });
      }
    },
    setActiveuser: function (id) {
      this.$store.dispatch("chat/setActiveuser", id);

      if (process.client) {
        this.width = window.innerWidth;
        if (this.width < 992) {
          document
            .querySelector(".sidebar-toggle")
            .classList.add("mobile-menu");
        }
      } else {
        return null;
      }
      this.$store.state.common.showsticker = false;
      this.$store.state.common.showemogi = false;
      this.$store.state.common.showcontactcontent = false;
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
