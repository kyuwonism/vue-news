import { createApp } from 'vue';
import App from '../App.vue'

// export default new Vue();
export const bus = createApp(App);
createApp(App).mount('#app')

