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
        };
    };

    #discountContainer{
        width: 100%;
        margin: auto;
        position: absolute;
        bottom: -10%;
    };

}

</style>
  