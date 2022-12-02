<template>
  <div id="app">
    <!-- here there are my 3 main components -->

    <!-- HeaderComp -->
    <HeaderComp/>

    <!-- MainComp -->
    <MainComp/>

    <!-- FooterComp -->
    <FooterComp/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data(){
    return{

      //Array containing navbar's labels and links
      navbarArray: [
        {
          label: 'Courses',
          links: [],
        },
        {
          label: 'Course Formats',
          links: [
            'Default Style', 'Classic', 'Udemy Affiliate Style', 'Offline Style', 'Free Courses', 'Lesson Style 1', 'Lesson Style 2'
          ],
        },
        {
          label: 'Add Course',
          links: [],
        },
        {
          label: 'Pages',
          links: [
            'About Us', 'Shop', 'Contact Us',
          ],
        },
        {
          label: 'Demos',
          links: [
            'Udemy Affiliate', 'Light LMS', 'Dark LMS', 'Offline Courses', 'Architecture', 'Online Accademy', 'Course Hub', 'Classic LMS', 'Private Instructor', 'RTL Demo', 'BuddyPress Demo', 'Distance Learning', 'Cooking Courses',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
