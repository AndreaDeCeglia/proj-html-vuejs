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
      </div>
    </main>
</template>
  
<script>
export default {
    name: 'MainComp',
    props: {
      msg: String
    }
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
            color: #F2B71D;
        };
        p{
            font-size: .7rem;
        };
    }
}

</style>
  