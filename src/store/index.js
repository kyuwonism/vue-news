import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

export const store = createStore({
    state: {
      news: [],
      asks: [],
      jobs: [],
      user: {},
      items: {}
    },
    getters: {
      fetchedAsk(state) {
        return state.asks;
      },
      fetchedItem(state) {
        return state.items;
      }
    },
    mutations,
    actions 
})