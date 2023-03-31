import { fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo, fetchList } from '../api/index.js';

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
      console.debug(data);
      commit('SET_ITEM', data);
    })
    .catch()
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
    .then(({ data }) => commit('SET_LIST', data))
    .catch(error => console.log(error));
  }
}