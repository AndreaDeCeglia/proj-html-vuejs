<template>
  <div id="caruselContainer" class="flex-column">
    <!-- thumbnails spot -->
    <div id="thumbnails" class="flex-row justify-around align-center margin20-0">
        <!-- left arrow -->
        <i class="fa-solid fa-arrow-left mx-2" @click="leftFlow()"></i>
        <!-- thumbnails with students' images -->
        <img 
            v-for="(element, indexStudent) in studentsArray" 
            :key="indexStudent"
            :src="require(`./../assets/img/${element.image}`)"
            @click="select(indexStudent)" 
            :class="(index == indexStudent) ? 'scale' : ''" 
            alt="..."
        />
        <!-- right arrow -->
        <i class="fa-solid fa-arrow-right mx-2" @click="rightFlow()"></i>
    </div>
    <!-- dinamic phrase and stars spot -->
    <div id="phrase">
        <h5 class="margin10-0">
            {{ studentsArray[index].phrase }}
        </h5>
        <span class="margin10-0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </span>
    </div>
    <!-- dinamic explanation spot -->
    <div class="margin10-0" id="explanationContainer">
        <p>
            {{ studentsArray[index].explanation }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CaruselComp',
    props: {
        studentsArray: Array,
    },
    data(){
        return{
            index: 0,
            //dinamicClass: 'scale',
        }
    },
    mounted(){
        this.timer();
    },
    methods: {
        
        timer(){
            setInterval( this.rightFlow, 3000 )
        },

        rightFlow(){
            if( this.index < this.studentsArray.length - 1 ){
                    console.log(`you're flowing up`)
                    return this.index++;
                } 
                return this.index = 0
        },

        leftFlow(){
            if( this.index > 0 ){
                    console.log(`you're flowing down`)
                    return this.index--;
                    } 
                return this.index = this.studentsArray.length -1
        },

        select( indexStudent ){
            return this.index = indexStudent;
        },
    },

}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

#thumbnails{
    img{
        border-radius: 100%;
        width: 10%;
    }
}

.fa-star{
    font-size: 1.5rem;
    color: #EBB024;
}

.scale{
    transform: scale(2);
}
</style>