<template>
  <client-only>
    <Chat />
  </client-only>
</template>

<script>
// import Messenger from "../../components/messenger/index.vue";
import Chat from "@/components/messenger/chat.vue";
import { mapState } from "vuex";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
import Vue from "vue";
// import io from "socket.io-client";
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: "https://dev.apigochat.com/",
    options: {
      path: "/socket/socket.io",
      transports: ["polling"],
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
          },
        },
      },
    },
  })
);
export default {
  components: {
    Chat,
  },
  sockets: {
    connect: function () {
      console.log("socket to notification channel connected");
    },
  },

  data() {
    return {
      syncTime: "",
    };
  },
  computed: {
    ...mapState({
      sesssionid: (state) => state.chat.session,
    }),
  },
 async mounted() {
    if (this.getProfile == null) {
     await this.getMe();
    }
    Vue.use(
      new VueSocketIO({
        debug: false,
        connection: "https://dev.apigochat.com/",
        options: {
          path: "/socket/socket.io",
          transports: ["polling"],
          transportOptions: {
            polling: {
              extraHeaders: {
                Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
              },
            },
          },
        },
      })
    );
    console.log("First sdqsdmqwodiedmwowoideion");
    this.getRooms();
    
    // this.ClearRealm()

    this.sockets.subscribe("socketId", function (data) {
      this.syncTime = data.syncTime;
      this.$socket.emit("rooms", `{"syncTime":"${this.syncTime}","page":1}`);
      this.sockets.subscribe(`rooms:${this.getProfile.id}`, function (data) {
        console.log("Get Rooms");
        console.log(data.data);
        data.data.map((item) => {
          this.sockets.subscribe(`messages:${item.sessionId}`, function (data) {
            if (data.data) {
              this.addDataToRealm(data.data, "addMessage");
              this.addDataToRealm(data.data, "updateShow");
            }
          });
          this.sockets.subscribe(
            `messages:update:${item.sessionId}`,
            function (msgupdate) {
              console.log(msgupdate);
              this.addDataToRealm(msgupdate.data, "addMessage");
              if (this.sesssionid) {
                if (this.sesssionid == item.sessionId) {
                  this.updateMessage(this.sesssionid);
                }
              }
            }
          );
        });
        data.data.map((item) => {
          this.$socket.emit(
            `messages`,
            `{"syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
          );
        });
      });

      // this.sockets.subscribe(
      //   `rooms:update:6204c1d6c96f594f6b4cacce`,
      //   function (data) {
      //     console.log("Rooms Update");
      //     console.log(data);
      //   }
      // );
    });
    
  },
  methods: {
    async getMe() {
      console.log('getme');
      try {
        const response = await this.$store.dispatch("auth/getMe");
        console.log(response);
        if (response.message === 'success') {          
          this.$store.dispatch('auth/setProfile',response.data.userProfile)
          console.log(response.data.userProfile);
        }
      } catch (error) {}
    },
    async getRooms() {
      try {
        const payload = {
          dateTime: "2017-01-01 00:00:00",
          page: 1,
          limit: 10,
        };
        const response = await this.$store.dispatch(
          "room/requestRoom",
          payload
        );
        if (response.status === 200) {
          this.addDataToRealm(response.data.data, "addRooms");
        }
      } catch (error) {}
    },
    
  },
};
</script>
