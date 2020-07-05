import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import  AlrtCmp from './components/Shared/alert'
import RegDia from  './components/MeetUp/RegisterDialog'


import { store } from './store'
Vue.config.productionTip = false
Vue.component('alert-app', AlrtCmp)
Vue.component('app-register-dialog', RegDia)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App),
  created (){
    firebase.initializeApp({
      apiKey: 'AIzaSyCnQYZQlZzl6H3o631FucNf0wKCMaBz6Ho',
      authDomain: 'my-meetup-ac8f2.firebaseapp.com',
      databaseURL: 'https://my-meetup-ac8f2.firebaseio.com',
      projectId: 'my-meetup-ac8f2',
      storageBucket: 'my-meetup-ac8f2.appspot.com',
      messagingSenderId: '323765347368',
      appId: '1:323765347368:web:137a2b4f25966738e6411d',
      measurementId: 'G-68EKNTBTQP'
    })
    this.$store.dispatch('loadMeetups')
  },




})
