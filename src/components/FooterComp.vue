<template>
  <footer>

  </footer>
</template>

<script>
export default {
    name: 'FooterComp',
    props: {
        aboutObj: Object,
        contactObj: Object,
    },
}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

footer{
    background-color: #F2B71D;
}

</style>