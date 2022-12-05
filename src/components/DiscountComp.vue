<template>
    <!-- container of Subscriving section and counter -->
  <div id="discount" class="container-70 flex-row padding-2">
    <!-- Subscribing section -->
    <div id="leftDiscount">
        <!-- courses discount title -->
        <h2>
            <span>Limited Sale:</span> All courses with 55% off
        </h2>
        <!-- input section -->
        <div id="inputSection">
            <input type="text" placeholder="Enter your E-mail">
            <button>SUBSCRIBE</button>
        </div>
        <!-- input closure -->
    </div>
    <!-- Subscribing closure -->
  </div>
  <!-- container closure -->
</template>

<script>
export default {
    name: 'DiscountComp',
    
}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

#discount{
    
    background-color: #f2b71d;
    #leftDiscount{
        width: 50%;
        h2{
            font-size: 1.2rem;
            span{
                color: white;
            };
        };
        #inputSection{
            width: 100%;
            margin-top: 3%;
            padding: 2%;
            position: relative;
            input{
                width: 100%;
                padding: 3% 5%;
                border-radius: 50px;
            };
            button{
                background-color: #252525;
                color: white;
                padding: 3% 5%;
                border-radius: 50px;
                position: absolute;
                right: 0;
                z-index: 2;
            }
        };

        
    };

}

</style>