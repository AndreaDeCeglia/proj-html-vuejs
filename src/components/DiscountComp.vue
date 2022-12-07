<template>
    
    <!-- container of Subscriving section and counter -->
  <div id="discount" class="container-70 flex-row padding-2">
    
    <!-- Subscribing section -->
    <div id="leftDiscount" class="padding-2">
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

    <!-- count down spot -->
    <div id="countdownContainer" class="padding-2 flex-row justify-around">
        <div>
            <h1>
                {{ displaydays }}
            </h1>
            <h6>
                DAYS
            </h6>
        </div>
        <div>
            <h1>
                {{ displayhours }}
            </h1>
            <h6>
                HOURS
            </h6>
        </div>
        <div>
            <h1>
                {{ displayminutes }}
            </h1>
            <h6>
                MINUTES
            </h6>
        </div>
        <div>
            <H1>
                {{ displayseconds }}
            </H1>
            <h6>
                SECONDS
            </h6>
        </div>
    </div>
    <!-- count down closure -->
  </div>
  <!-- container closure -->
</template>

<script>
export default {
    name: 'DiscountComp',
    data(){
        return{
            displaydays: 0,
            displayhours: 0,
            displayminutes: 0,
            displayseconds: 0,
        }
    },
    methods: {
        remainingTime(){
            const timer = setInterval(() => {
                const now  = new Date();
                const end = new Date(2022, 12, 2, 10, 10, 10, 10);
                const distance = end.getTime() - now.getTime()
                
                if(distance < 0){
                    clearInterval(timer);
                    return
                }
        
                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayseconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayminutes = minutes < 10 ? "0" + minutes : minutes;
                this.displayhours = hours < 10 ? "0" + hours : hours;
                this.displaydays = days < 10 ? "0" + days : days;
            }, 1000 );
        }
    },
    mounted() {
        this.remainingTime()
    },
    computed: {
        _seconds: () => 1000,
        
        _minutes(){
            return this._seconds * 60
        },
        
        _hours(){
            return this._minutes * 60
        },
        
        _days(){
            return this._hours * 24
        }
    },
}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

#discount{
    
    background-color: #f2b71d;
    #leftDiscount{
        width: 50%;
        h2{
            font-size: 1.4rem;
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

    #countdownContainer{
        width: 50%;
        h1{
            color: white;
            font-size: 4rem;
        }
    }

}

</style>