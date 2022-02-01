<template>
  <client-only>
    <Chat />
  </client-only>
</template>

<script>
// import Messenger from "../../components/messenger/index.vue";
import Chat from "@/components/messenger/chat.vue";
import io from "socket.io-client";
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
      socket: io(),
      syncTime: "",
    };
  },

  mounted() {
    this.sockets.subscribe("socketId", function (data) {
      this.syncTime = data.syncTime;
    });

    const val = `{syncTime:'2021-10-25 11:32:42',page: 1}`;
    // this.$socket.on("event-friends", (res) => {
    //   this.$socket.emit("event-friends", val);
    //   console.log(res);
    // });

    // this.$socket.emit("event-friends", val, (data) => {
    //   console.log(data); // data will be 'woot' (reply from the server)
    // });

    this.$socket.emit("friends", val);

    this.socket.on("friends:61dbf02ab43c5ae268243780", (data) => {
      console.log(data);
    });

    // this.sockets.subscribe("friends:61dbf02ab43c5ae268243780", (data) => {
    //     console.log("friends : ", data);
    // });

    // this.$socket.emit("friends", val, (data) => {
    //   console.log(data); // data will be 'woot' (reply from the server)
    // });

    // // const userID = this.$store.getters['auth/profile']
    // // console.log(userID)
    // this.$socket.on('friends:61dbf02ab43c5ae268243780', (res) => {
    //   console.log(res);
    // });

    //this.$socket.emit('socketId',);
  },
  //   sockets: {
  //     connect: function () {
  //       console.log("socket connected");
  //     },
  //     'event-friends': function (data) {
  //       console.log('xxxxxxx', data)
  //     }
  //   },
  //   mounted() {
  //     const body = {
  //       syncTime: "2021-10-25 11:32:42",
  //       page: 1,
  //     };

  // this.$socket.emit('event-friends', body);
  //     this.sockets.subscribe("event-friend:update", function(data) {
  //       console.log("This event was fired by eg. sio.emit('kebab-case')", data)
  //     });

  // console.log('Yeah : ' , body)
  //    this.$socket.emit("event-friends", body, data => {
  //          console.log(data)
  //        });

  //  this.$socket.emit('event-friends', data)
  //  this.$socket.on('event-friends', (data) => {
  // console.log(data)
  // });
  // this.sockets.customEmit

  // this.$socket.io.emit("customEmit", data)
  //  this.$socket.io.on('event-rooms:update', () => {
  //     const listener = (...args) => {
  //       // const objectData = JSON.parse(args)
  //       // if (objectData) {
  //       //   this.listSocketMuay.push(objectData)
  //       // }
  //       // console.log('socket data : ', this.listSocketMuay)
  //       console.log(args)
  //     }
  //     socket.on('msg', listener)
  //   })
  //},
};
</script>
