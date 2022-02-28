/* Group Chat store For Group Chat Functionality */



const state = {
  roomchange:0
};

// getters
const getters = {
  currentRoom: (state) => {
    
    return { count:state.roomchange };
  },
};

// mutations
const mutations = {
  roomChange:(state,payload) =>{
    state.roomchange += payload
  }
};

// actions
const actions = {
  roomChange:(context,payload)=>{
    context.commit("roomChange", payload);
  },
  requestRoom({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/rooms`, payload);
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
