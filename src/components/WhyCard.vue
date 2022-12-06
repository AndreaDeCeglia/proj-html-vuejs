<template>
  <div id="WhyCard" class="padding-2 basis-50 txt-left margin10-0">
    <div class="flex-row">
        <div id="iconSpot" class="padding-2 margin10-0">
            <i class="fa-solid fa-suitcase"></i>
        </div>
        <div id="specificies" class="padding-2">
            <h4 class="margin10-0">
                {{ singleWhy.skill }}
            </h4>
            <p>
                {{ singleWhy.explanation }}
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'WhyCard',
    props: {
        singleWhy: Object,
    },
}
</script>

<style scoped lang="scss">

@import './../assets/css/utility.scss';

#WhyCard{
    div.flex-row{
        border-left: 4px solid #EBB024;
        font-size: .8rem;
        box-shadow: 5px 5px 5px 5px grey;

        #iconSpot{
            i{
                font-size: 2rem;
                color: #EBB024;
            }
        }
    };
}

</style>