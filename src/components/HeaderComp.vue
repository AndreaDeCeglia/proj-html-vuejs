<template>
  <header>
    <div class="container-70 flex-row justify-between align-center padding-2">
      <!-- logo's container -->
      <div id="headerLogo">
        <img src="data:image/png;base64,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" alt="">
      </div>
      <!-- div containing navbar and socials' section -->
      <div id="navbar" class="flex-row justify-end">
        <!-- navbar section -->
        <nav class="flex-row justify-between ">
          <NavbarSingleElement
            v-for="(element, index) in navbarArray"
            :key="index"
            :navElement="element"
          />          
        </nav>
              <!-- navbar closure -->
        
        <span id="socials">
          <ul class="flex-row justify-between unstyle-list">
            <li class="padding-left20"><i class="fa-brands fa-linkedin"></i></li>
            <li class="padding-left20"><i class="fa-brands fa-instagram"></i></li>
            <li class="padding-left20"><i class="fa-brands fa-facebook"></i></li>
            <li class="padding-left20"><i class="fa-brands fa-twitter"></i></li>
          </ul>
        </span>
      </div>
      <!-- nav and socials closure -->
    </div>
  </header>
</template>

<script>
import NavbarSingleElement from './NavbarSingleElement.vue'

export default {
  name: 'HeaderComp',
  props: {
    navbarArray: Array,
    socialsArray: Array,
  },
  components: {
    NavbarSingleElement,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/css/utility.scss';

#headerLogo{
  width: 20%;
  img{
    width: 100%;
  }
}

#navbar{
  //margin: 0 10%;
  nav{
    width: 70%;
  }
}

#socials{
  ul{
    li{
      i{
        cursor: pointer;
      }
    }
  }
}


</style>
