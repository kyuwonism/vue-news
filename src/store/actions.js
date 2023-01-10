import { fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo } from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
    .then(response => {
      console.log(response.data)
      context.commit('SET_NEWS', response.data);
    })
    .catch(error => {
      console.log(error);
    })
  },
  FETCH_ASK(context) {
    fetchAskList()
    .then(response => {
      console.log(response);
      context.commit('SET_ASKS', response.data);
    })
    .catch(error => {
      console.log(error);
    })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
    .then(response => {
      console.log(response);
      context.commit('SET_JOBS', response.data);
    })
    .catch(error => {
      console.log(error);
    })
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
    .then(({ data }) => {
      commit('SET_USER', data);
    })
    .catch()
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId)
    .then(({ data }) => {
      commit('SET_ITEM', data);
    })
    .catch()
  }
}