<template>
  <div id="blog" class="flex-row">
    <img :src="require(`./../assets/img/${blogObj.image}`)" alt="">
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
        width: 20;
        aspect-ratio: 1/1;
    }
}

</style>