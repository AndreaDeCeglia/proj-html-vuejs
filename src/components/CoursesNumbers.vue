<template>
    <div class="margin30-0">
        <!-- icon - left part -->
        <div>
            <i class="fa-solid fa-graduation-cap txt-white"></i>
        </div>
        <!-- statistics - right part -->
        <div id="statistic" class="txt-left margin-left20">
            <h2>
                {{ statistic.howMuch }}
            </h2>
            <h6 class="txt-white margin10-0">
                {{ statistic.what }}
            </h6>
        </div>
        <!-- right part closure -->
    </div> 
</template>

<script>
export default {
    name: 'CoursesNumbers',
    props: {
        statistic: Object,
    },

}
</script>

<style scoped lang="scss">
@import './../assets/css/utility.scss';

#statistic{
    h2{
        color:#EBB024;
    };
};

.fa-solid{
    font-size: 3rem;
}


</style>