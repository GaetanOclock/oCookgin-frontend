import { createStore } from 'vuex';

export default createStore({
    state () {
      return {
        isUserConnected: false
      }
    },
    mutations: {
      updateConnectionStatus (state) {
        state.isUserConnected = !!localStorage.getItem('token');
      }
    }
});