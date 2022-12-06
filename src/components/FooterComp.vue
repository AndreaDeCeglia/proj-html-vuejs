<template>
  <footer class="txt-left padding30-0">
    <div class="container-70 flex-row padding-2">
        
        <!-- about section -->
        <div class="basis-25 flex-column justify-between align-start padding-2">
            <h4>
                {{ aboutObj.title }}
            </h4>
            <p class="margin10-0">
                {{ aboutObj.text }}
            </p>
            <div class="margin10-0">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter margin-left10"></i>
                <i class="fa-brands fa-instagram margin-left10"></i>
            </div>
        </div>
        
        <!--  contact section -->
        <div class="basis-25 padding-2">
            <h4>
                {{ contactObj.title }}
            </h4>
            <p class="margin10-0">
                {{ contactObj.address }}
            </p>
            <p class="margin10-0">
                {{ contactObj.tel }}
                <br>
                {{ contactObj.fax }}
            </p>
            <p class="margin10-0">
                {{ contactObj.mail }}
            </p>
        </div>
        
        <!-- pages section -->
        <div class="basis-25 padding-2">
            <h4>
                PAGES
            </h4>
            <ul class="flex-column wrap">
                <li 
                    v-for="n in pagesArray"
                    :key="n"
                    class="basis1-3 margin20-0"
                >
                    {{ n }}
                </li>
            </ul>
        </div>
        
        <!-- blogs section -->
        <div class="basis-25 flex-column justify-around">
            <BlogComp
                v-for="(element, index) in blogObj"
                :key="index"
                :blogObj="element"
            />
        </div>
    </div>
  </footer>
</template>

<script>

import BlogComp from './BlogComp.vue'

export default {
    name: 'FooterComp',
    props: {
        aboutObj: Object,
        contactObj: Object,
        pagesArray: Array,
        blogArray: Array,
    },
    components: {
        BlogComp,
    },
}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

footer{
    background-color: #F2B71D;
}

</style>