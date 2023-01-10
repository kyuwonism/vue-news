import { createWebHistory, createRouter} from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    paht: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    component: NewsView, 
  },
  {
    path: '/ask',
    component: AskView,
  },
  {
    path: '/jobs',
    component: JobsView,
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
