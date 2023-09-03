import Vue from 'vue';
import App from './app.vue';
import AOS from 'aos';
import './aos/dist/aos.css';

new Vue({
    created() {
        AOS.init()
    },
    render: (h) => h(App)
  }).$mount('#app')