<template>
  <div id="app">
    <!-- here there are my 3 main components -->
    <div v-for=" n in socialsArray" :key="n" > {{el}} </div>
    
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

      //Array containing icons
      socialsArray: [
        'fa-brands fa-linkedin',
        'fa-brands fa-instagram',
        'fa-brands fa-facebook',
        'fa-brands fa-twitter',
      ],

      //Array containing new courses specificies
      //just photos still miss
      newCoursesArray: [
        {
          image:'',
          title: 'How to be a DJ? Make Electronic Music',
          type: 'Electronic',
          level: 'Advanced',
          lectures: '3 Lectures',
          duration: '20 hours',
        },
        {
          image:'',
          title: 'Fashion Photography from professional',
          type: 'Fashion',
          level: 'Advanced',
          lectures: '4 Lectures',
          duration: '12 hours',
        },
        {
          image:'',
          title: 'Graphic Design Basics Masterclass',
          type: 'Communication',
          level: 'Intermediate',
          lectures: '3 Lectures',
          duration: '10 hours',
        },
        {
          image:'',
          title: 'Interior design concepts Masterclass',
          type: 'Art',
          level: 'Intermediate',
          lectures: '4 Lectures',
          duration: '8 hours',
        },
        {
          image:'',
          title: 'Road Bike Manual or How to Be a Champion',
          type: 'Bicycling',
          level: 'Beginner',
          lectures: '3 Lectures',
          duration: '4 hours',
        },
        {
          image:'',
          title: 'Real Things Art Painting by Jason Ni',
          type: 'Art',
          level: 'Intermediate',
          lectures: '5 Lectures',
          duration: '9 hours',
        },
      ],

      //whyMyCoursesArray with courses' specificies
      whyMyCoursesArray: [
        {
          logo: 'fa-regular fa-thumbs-up',
          skill: 'Entrapreneurship',
          explanation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, pariatur iure corrupti voluptate incidunt nulla excepturi voluptas, consequuntur numquam unde eaque officiis minima maxime nobis voluptatum ab, saepe earum recusandae.',
        },
        {
          logo: 'fa-regular fa-rocket',
          skill: 'Accelerated learning',
          explanation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, pariatur iure corrupti voluptate incidunt nulla excepturi voluptas, consequuntur numquam unde eaque officiis minima maxime nobis voluptatum ab, saepe earum recusandae.',
        },
        {
          logo: 'fa-regular fa-briefcase',
          skill: 'Productivity',
          explanation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, pariatur iure corrupti voluptate incidunt nulla excepturi voluptas, consequuntur numquam unde eaque officiis minima maxime nobis voluptatum ab, saepe earum recusandae.',
        },
        {
          logo: 'fa-regular fa-gear',
          skill: 'Life Coaching',
          explanation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, pariatur iure corrupti voluptate incidunt nulla excepturi voluptas, consequuntur numquam unde eaque officiis minima maxime nobis voluptatum ab, saepe earum recusandae.',
        },
      ],
      
      //array containing statistics about the courses
      coursesNumbersArray: [
        {
          icon: 'fa-regular fa-user-group',
          howMuch: '7500',
          what: 'Online Learner',
        },
        {
          icon: 'fa-regular fa-film',
          howMuch: '55',
          what: 'Video Courses',
        },
        {
          icon: 'fa-regular fa-images',
          howMuch: '1025',
          what: 'Sliders Images',
        },
        {
          icon: 'fa-regular fa-thumbs-up',
          howMuch: '3380',
          what: 'Excellent Reviews',
        },
      ],

      studentsArray: [
        {
          image: './assets/img/1-100x100.jpg',
          phrase: 'Come as you are',
          explanation: `MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.`,
        },
        {
          image: './assets/img/2-100x100.jpg',
          phrase: 'Paints of the future',
          explanation: `The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.`,
        },
        {
          image: './assets/img/4-100x100.jpg',
          phrase: 'Investing for Your Future',
          explanation: `It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!`,
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
