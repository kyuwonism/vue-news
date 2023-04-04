import { fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo, fetchList } from '../api/index.js';

export default {
  
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  
  //
  async FETCH_ASK(context) {
    // fetchAskList()
    // .then(response => {
    //   console.log(response);
    //   context.commit('SET_ASKS', response.data);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    
    const response = await fetchAskList();
    context.commit('SET_ASKS', response.data);
    return response;
  },

  //
  async FETCH_JOBS(context) {
    // fetchJobsList()
    // .then(response => {
    //   console.log(response);
    //   context.commit('SET_JOBS', response.data);
    // })
    // .catch(error => {
    //   console.log(error);
    // })

    const response = await fetchJobsList();
    context.commit('SET_JOBS', response.data);
    return response;
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
    .then(({ data }) => {
      commit('SET_USER', data);
    })
    .catch()
  },

  //
  // async FETCH_ITEM({ commit }, itemId) {
    // fetchItemInfo(itemId)
    // .then(({ data }) => {
    //   console.debug(data);
    //   commit('SET_ITEM', data);
    // })
    // .catch()

  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchItemInfo(itemId);
    commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    // fetchList(pageName)
    // .then(({ data }) => commit('SET_LIST', data))
    // .catch(error => console.log(error));

    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
}