//
// Libraries
//
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import client from './client/client.js'
import store from './store/store.js'
import 'bootstrap';

//
// Styles
//
import 'sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// for your css-styles
import './styles/main.css';
// or for scss
import './styles/custom.scss';

//
// Settings
//
Vue.config.debug         = process.env.NODE_ENV == 'development'
Vue.config.devtools      = process.env.NODE_ENV == 'development'
Vue.config.productionTip = process.env.NODE_ENV == 'development'
Vue.config.silent        = process.env.NODE_ENV != 'development'

//
// Vue Router
//
import router from './routes/router'
import {sync} from 'vuex-router-sync'
sync(store, router);

//
// Vue
//
import App from './components/App.vue'

document.vueApp = new Vue({
  el: '#mainapp',
  router,
  store,
  render: function(h){ return h(App);}
});
