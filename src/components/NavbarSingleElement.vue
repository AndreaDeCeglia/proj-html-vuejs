<template>
  <span id="navElement">
    <a href="#" class="unstyle-a">
        {{ navElement.label }}
    </a>
    <ul class="unstyle-list">
        <li v-for="n in navElement.links" :key="n">
            {{ navElement.links }}
        </li>
    </ul>
  </span>
</template>

<script>
export default {
    name: 'NavbarSingleElement',
    props: {
        navElement: Object,
    }

}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

#navElement{
    font-size: .6rem;
    width: 100px;

    a{
        color: black;
    };
    ul{
        display: none;
    };
    a:hover ul{
        display: block;
    }
}

</style>