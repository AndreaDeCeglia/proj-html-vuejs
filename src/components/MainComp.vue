<template>
    <main>
       
        <!-- jumbotron section -->
      <div id="jumbotron">
        
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
      </div>
      <!-- jumbotron closure -->

      <!-- founder presentation's section -->
      <div id="founder" class="container-70 flex-row justify-around align-start margin80-0 padding-2">
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
      </div>
      <!-- founder sec. closure -->
    </main>
</template>
  
<script>
import DiscountComp from './DiscountComp.vue'

export default {
    name: 'MainComp',
    props: {
      msg: String
    },
    components: {
        DiscountComp,
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

</style>
  