export default {
  SET_NEWS(state, news) {
    state.news = news; 
  },
  SET_ASKS(state, asks) {
    state.asks = asks;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.items = item
  },
  LOADING_STATUS (state, loadingStatus) {
    state.loadingStatus = loadingStatus
  },
  SET_LIST(state, list) {
    state.list = list;
  }
}