import { createWebHistory, createRouter} from 'vue-router'
import NewsView from '../views/NewsView.vue'
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import createListView from '../views/CreateListView.js';
import { store } from '../store/index.js';

const routes = [
  {
    paht: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    // component: createListView('NewsView'),
    component: NewsView,
    beforeEnter: (to, from, next) => {
      store.dispatch('FETCH_LIST', to.name)
      .then(() => {
        next();
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView'),
  },
  {
    path: '/item/:id',
    component: ItemView,
  },
  {
    path: '/user/:id',
    component: UserView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
