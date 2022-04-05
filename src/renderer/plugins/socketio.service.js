import Vue from 'vue';
import VueSocketIO from "vue-socket.io";
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    const options = {
      path: "/socket/socket.io",
      transports: ["polling"],
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
          },
        },
      },
    }
Vue.use(
  new VueSocketIO({
    // connection: "https://test.apigochat.com/",
    debug:false,
    connection: 'https://dev.apigochat.com/',
    options:options
    
  })
);
  }
  
    
  
}

export default new SocketioService();