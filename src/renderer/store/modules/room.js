/* Group Chat store For Group Chat Functionality */



const state = {
};

// getters
const getters = {
};

// mutations
const mutations = {
};

// actions
const actions = {

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
