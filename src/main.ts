import '@/styles/app.scss';

import { createApp } from 'vue';
import App from '@/App.vue';

import { Init } from '@/scripts/index';
import { devEnv } from '../project.config.mjs';

import router from './router';

createApp(App).use(router).mount('#app');

(() => {
  // development
  if (devEnv) {
    Init();
  }
})();
Init();
