// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBABvuxLPRHxQRqdI_C2ZCfzvWBfYpyI0Y',
  authDomain: 'vue-firebase-auth-test-3d83b.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-test-3d83b.firebaseio.com',
  projectId: 'vue-firebase-auth-test-3d83b',
  storageBucket: 'vue-firebase-auth-test-3d83b.appspot.com',
  messagingSenderId: '1011970921645',
  appId: '1:1011970921645:web:d6207e8b1400cdbf10a224'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firebaseDb = firebaseApp.firestore()

console.log('firebaseDb')
firebaseDb.collection('comments').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`)
    console.log(doc.data())
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
