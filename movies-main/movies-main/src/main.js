import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import '@/assets/styles/tailwind.css';

// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

createApp(App).use(store).use(router).mount('#app')
