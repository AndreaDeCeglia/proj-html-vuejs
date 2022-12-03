import Vue from 'vue'
import App from './App.vue'


// import the fontawesome core /
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add font awesome icon component 
Vue.component('font-awesome-icon', FontAwesomeIcon)

//import specific icons
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import {faGear} from '@fortawesome/free-regular-svg-icons';
import {faRocket} from '@fortawesome/free-regular-svg-icons';
import {faBriefcase} from '@fortawesome/free-regular-svg-icons';
import {faUserGroup} from '@fortawesome/free-regular-svg-icons';
import {faFilm} from '@fortawesome/free-regular-svg-icons';
import {faImages} from '@fortawesome/free-regular-svg-icons';

library.add(faLinkedin, faInstagram, faFacebook, faTwitter, faThumbsUp, faGear, faRocket, faBriefcase, faUserGroup, faFilm, faImages);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
