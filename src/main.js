import Vue from 'vue'
import App from './App.vue'

//import my utility's CSS document
//import utility from './assets/css/utility.scss'
// import the fontawesome core /
//import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component /
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add font awesome icon component 
//Vue.component('font-awesome-icon', FontAwesomeIcon)

//import specific icons
//import {faLinkedin, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

//import {faThumbsUp, faGear, faRocket, faBriefcase, faUserGroup, faFilm, faImages} from '@fortawesome/free-regular-svg-icons';


//library.add(faLinkedin, faInstagram, faFacebook, faTwitter, faThumbsUp, faGear, faRocket, faBriefcase, faUserGroup, faFilm, faImages);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
