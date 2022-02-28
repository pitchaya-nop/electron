<template>
  <!--Direct Chat User start -->
  <div>
    <div class="search2">
      <div>
        <div class="input-group">
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
    
    <li
      :class="{ active: activeIndex === index }"
      v-for="(user, index) in filtershow"
      :key="user.id"
      @click="
        setActive(index),
          setActiveuser(user.id),
          setSeesionuser(user.sessionid),
          setChatuser(user.sessionid)
      "
    >
      <div class="chat-box">
        <div class="media">
          <!-- <div
          :style="[
            { 'background-image': 'url(' + getImgUrl(user.avatars.thumbnail) + ')' },
            styleObject,
          ]"
        ></div> -->
          <div
            class="profile"
            :style="
              user.sessiontype == 'CHAT'
                ? user.user.avatar
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
            <h6>Last Message Coming soon..</h6>
          </div>
          <div class="date-status">
            <i class="ti-pin2"></i>
            <!-- <h6>{{ user.date }}</h6>
          <div v-html="user.active"></div> -->
          </div>
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      count: [],
      activeIndex: null,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      chatUser: [],
    };
  },
  mounted() {
    // this.getChat();
    this.getdataDB.then((data) => {
      this.chatUser = data.objects("ROOM");
      for (let i = 0; i < this.chatUser.length; i++) {
        console.log(this.chatUser[i]);
      }
    });
  },
  computed: {
    filtershow: function () {
      return this.chatUser.filter((i) => i.isshow == true);
    },
    // ...mapState({

    // })
  },
  methods: {
    // getcontainer(){
    //   const contain = document.querySelector('.scrolltopdirectchat')
    //   contain.scrollTop = contain.scrollHeight;

    // },
    
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    setChatuser: function (sessionid) {
      this.getdataDB.then((data) => {
        let msg = data
          .objects("MESSAGE")
          .filtered(`sessionid == "${sessionid}"`);
        this.$store.dispatch("chat/setChat", msg);
      });
      setTimeout(() => {
        const contain = document.querySelector(".scrolltopdirectchat");
        contain.scrollTop = contain.scrollHeight;
      }, 100);
      
    },
    setSeesionuser: function (sessionid) {
      this.$store.dispatch("chat/setSessionChat", sessionid);
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
    // async getChat() {},
    // async getChat() {
    //   try {
    //     const payload = {
    //       dateTime: this.getCurrentTime,
    //       page: 1,
    //       limit: 10,
    //     };
    //     const response = await this.$store.dispatch(
    //       "room/requestRoom",
    //       payload
    //     );
    //     if (response.status === 200) {

    //       console.log(response.data.data);
    //       this.chatUser = response.data.data;
    //     }
    //   } catch (error) {
    //   } finally {
    //     console.log();
    //   }
    // },
  },
};
</script>
