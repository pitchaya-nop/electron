/* Group Chat store For Group Chat Functionality */



const state = {
  profile: null,
  token: window.localStorage.getItem('auth') || '',
};

// getters
const getters = {
  token: (state) => state.token,
  profile: (state) => state.profile,
};

// mutations
const mutations = {


  SET_TOKEN(state, token) {
    console.log('token',token)
    state.token = token
    if (!token) {
      window.localStorage.removeItem('auth')
    } else {
      window.localStorage.setItem('auth', token)
    }
  },

  SET_PROFILE(state, profile) {
    console.log('profile',profile)
    state.profile = profile
  },



};

// actions
const actions = {

  requestSignInViaEmail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$post(`/auth/email/signin`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },


  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },

  setProfile({ commit }, profile) {
    commit('SET_PROFILE', profile)
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
