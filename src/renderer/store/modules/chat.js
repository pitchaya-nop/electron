/* Direct Chat store For Direct Chat Functionality */

import Users from "../../data/directchat.json";

const state = {
  users: Users.data,
  chats: null,
  session: null,
  activeuser: null,
  typing: false,
  // dbchange: 0
};

// getters
const getters = {
  /* Get Current Direct Chat History */

  currentChat: (state) => {
    // var chats = state.chats.find((chat) => {
    //   if (chat.id == state.activeuser) return chat;
    // });
    // var users = state.users.find((user) => {
    //   if (user.id == state.activeuser) return user;
    // });
    // return { ...users, chat: chats };


    // let message = this.getdataDB
    // var chats = message.objects("MESSAGE").filtered(`sessionid === ${state.activeuser}`)
    return { active: state.activeuser, chat: state.chats };
  },
};

// mutations 
const mutations = {
  /* Set Active Direct Chat */
  setSessionChat: (state, payload) => {
    state.session = payload
  },
  // chatChange: (state, payload) => {
  //   state.dbchange += payload
  // },
  setActiveuser: (state, payload) => {
    state.activeuser = payload;
  },
  setChat: (state, payload) => {
    state.chats = payload
    
  },
  /* Add Direct Chat Sticker */
  //   addSticker: (state, payload) => {
  //     var today = new Date().toLocaleString("en-US", {
  //       hour: "numeric",
  //       minute: "numeric",
  //       hour12: true,
  //     });
  //     const id = state.activeuser;
  //     const addchat = state.chats.find((chat) => chat.id == id);
  //     addchat.messages.push({
  //       sender: 0,
  //       time: today.toLowerCase(),
  //       stickerpath: payload,
  //       sticker: true,
  //     });
  //   },

  //   /* Add Direct chat Text And Emogi*/
  //   addChat: (state, payload) => {
  //     var today = new Date().toLocaleString("en-US", {
  //       hour: "numeric",
  //       minute: "numeric",
  //       hour12: true,
  //     });
  //     const id = state.activeuser;
  //     const addchat = state.chats.find((chat) => chat.id == id);
  //     addchat.messages.push({
  //       sender: 0,
  //       time: today.toLowerCase(),
  //       text: payload,
  //       lastmsg: true,
  //     }),
  //       (state.typing = true);
  //   },

  //   /* Add Direct Chat AutoResponse */
  //   addChatResponce: (state) => {
  //     var today = new Date().toLocaleString("en-US", {
  //       hour: "numeric",
  //       minute: "numeric",
  //       hour12: true,
  //     });
  //     const id = state.activeuser;
  //     const addchat = state.chats.find((chat) => chat.id == id);
  //     const ChatUser = state.users.find((user) => user.id == id);
  //     setTimeout(function () {
  //       addchat.messages.push({
  //         sender: 1,
  //         lastmsg: true,
  //         time: today.toLowerCase(),
  //         text:
  //           `Hi I am ` +
  //           ChatUser.name +
  //           `, Sorry I busy right now, I will text you later`,
  //       });
  //       state.typing = false;
  //     }, 3000);
  //     state.users.find((user) => {
  //       if (user.id == state.activeuser) {
  //         user.profile = "profile online";
  //         user.online = true;
  //       }
  //     });
  //   },
};

// actions
const actions = {
  setChat: (context, payload) => {
    context.commit("setChat", payload);
  },
  setActiveuser: (context, payload) => {
    context.commit("setActiveuser", payload);
  },
  setSessionChat: (context, payload) => {
    context.commit("setSessionChat", payload);
  },
  // chatChange: (context, payload) => {
  //   context.commit("chatChange", payload);
  // },

  // addSticker: (context, payload) => {
  //   context.commit("addSticker", payload);
  // },
  setScroll(){
    const contain = document.querySelector('.scrolltopdirectchat')
    contain.scrollTop = contain.scrollHeight;
  },
  addChat({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/chat/send`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
