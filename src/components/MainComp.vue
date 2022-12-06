<template>
    <main>
       
        <!-- jumbotron section -->
      <section id="jumbotron">
        
        <!-- jumbotron script -->
        <div id="jumboscript">
            <h1>
                Start your Human <span>Revolution</span> today
            </h1>
            <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
            </p>
        </div>
        <!-- jumboscript closure -->
        
        <!-- jumbotron's discount section -->
        <div id="discountContainer">
            <DiscountComp/>
        </div>
        <!-- discount closure -->
      </section>
      <!-- jumbotron closure -->

      <!-- founder presentation's section -->
      <section id="founder" class="container-70 flex-row justify-between align-start margin80-0 padding-2">
        <!-- left part -->
        <div id="founderLeft" class="basis-39">
            <h2>
                Hey there, my name is John Doe. I'm the founder of the Brain Academy.
            </h2>
            <img src="./../assets/img/sign.jpg" alt="">
        </div>
        <!-- right part -->
        <div class="basis-59">
            <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary
            </p>
        </div>
      </section>
      <!-- founder sec. closure -->

      <!-- new courses section -->
      <section id="newCourses" class="padding-2">
        <h2 class="margin20-0">
            New Courses
        </h2>

        <!-- cards section -->
        <div class="container-70 flex-row justify-around wrap">
            <NewCourseCard
                v-for="(element, index) in newCoursesArray"
                :key="index"
                :NewCourse="element"
                class="basis-30 margin20-0"
            />
        </div>
        <!-- cards closure -->

        <button class="margin20-0">
            LOAD MORE
        </button>

      </section>
      <!-- new courses closure -->

      <!-- get my book section -->
      <section id="getMyBook">

        <div class="container-70 flex-row justify-center align-end">
                    <!-- left part with amazon's link for buying the book -->
            <div id="bookLeft" class="basis-50 flex-column justify-around align-center margin-top50">
                <div>
                    <h2>
                        Get My Exclusive Investing Book just for $19.50
                    </h2>
                </div>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore velit possimus architecto est, animi officiis nemo porro officia recusandae dolorum autem maxime quas at distinctio saepe sit sed maiores.
                    </p>
                </div>
                <div>
                    <a href="">
                        <img src="./../assets/img/amazon.png" alt="">
                    </a>
                </div>      
                
            </div>
            
            <!-- right part with the book's image -->
            <div id="bookRight" class="basis-50">
            </div>
        
        </div>
        
      </section>
      <!-- get my book closure -->
    </main>
</template>
  
<script>
import DiscountComp from './DiscountComp.vue'
import NewCourseCard from './NewCourseCard.vue'

export default {
    name: 'MainComp',
    props: {
      newCoursesArray: Array,
    },
    components: {
        DiscountComp,
        NewCourseCard,
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import './../assets/css/utility.scss';

// ******* Jumbotron's style **********
#jumbotron{
    height: 500px;
    background-image: url('./../assets/img/slide-1.jpg');
    background-size: cover;
    position: relative;

    #jumboscript{
        text-align: left;
        width: 30%;
        position: absolute;
        left: 50vw;
        top: 30%;

        h1{
            font-size: 2.5rem;
        };
        span{
            color: #f2b71d;
        };
        p{
            font-size: .7rem;
            margin-top: 5%;
        };
    };

    #discountContainer{
        width: 100%;
        margin: auto;
        position: absolute;
        bottom: -10%;
    };

};

// ********* founder style ***********
#founder{
    text-align: left;
    margin-top: 10%;

    h2{
        font-size: 1.4rem;
    };
    img{
        margin-top: 5%;
    };
    p{
        font-size: .9rem;
    };
};

// ****** New Courses Style ********
#newCourses{
    background-color: #E0E7E5;

    button{
        font-size: .7rem;
        padding: 2% 4%;
        border-radius: 50px;
        color: white;
        background-color: #EBB024;
    };
};

// ******* getMyBook Style ********
#getMyBook{
    width: 100%;
    height: 280px;
    background-image: url('./../assets/img/slider_1-1917x607-1914x606.jpg');
    background-size: cover;
    font-size: .8rem;

    div.container-70{
        height: 100%;

        #bookLeft{
            height: 100%;
            h2{
                color: #f2b71d;
            };
            p{
                color: white;
            };
            a{
                img{
                    width: 60%;
                };
            };       
        };
        #bookRight{
            background-image: url('./../assets/img/book.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 100%;
        };
    };

    
};

</style>
  