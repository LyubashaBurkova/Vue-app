import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAQWYVoVuYUha7NqbgHJiIrwyFFE8tJqdo",
      authDomain: "its-ads-burkova.firebaseapp.com",
      databaseURL: "https://its-ads-burkova.firebaseio.com",
      projectId: "its-ads-burkova",
      storageBucket: "",
      messagingSenderId: "296363231297",
      appId: "1:296363231297:web:0f47294548aca805"
    })
    //пользователь остается в системе при перезагрузке страницы
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
