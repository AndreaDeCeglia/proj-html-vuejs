<template>
  <div id="blog" class="flex-row">
    <img :src="require(`./../assets/img/${blogObj.image}`)" alt="">
    <div class="margin-left10">
        <h6>
            {{ blogObj.title }}
        </h6>
        <p class="txt-gray">
            {{ blogObj.date }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BlogComp',
    props: {
        blogObj: Object,
    },
}
</script>

<style scoped lang="scss">
@import './../assets/css/utility.scss';

#blog{
    img{
        width: 50%;
        aspect-ratio: 1/1;
    }
}

</style>