<template>
  <div id="NewCourseCard" class="flex-column justify-between">
    
    <img :src="require(`./../assets/img/${NewCourse.image}`)" alt="">
    
    <h4>
        {{ NewCourse.title }}
    </h4>
    
    <span>
        {{ NewCourse.type }}
    </span>

    <div id="line"></div>

    <div id="buttomCard" class="flex-row justify-around align-center">
        <div>
            {{ NewCourse.level }}
        </div>
        <div>
            {{ NewCourse.lectures }}
        </div>
        <div>
            {{ NewCourse.duration }}
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'NewCourseCard',
    props: {
        NewCourse: Object,
    },

}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

#NewCourseCard{
    background-color: white;
    border: 1px solid grey;
    aspect-ratio: 1/1.2;
    font-size: .7rem;
    img{
        width: 100%;
        height: 50%;
    };
    span{
        color: grey;
    };
    #line{
        width: 90%;
        margin: 0 auto;
        height: 1px;
        background-color: grey;
    };

    #buttomCard{
        color: grey;
        margin-bottom: 5%;
    };
};

</style>