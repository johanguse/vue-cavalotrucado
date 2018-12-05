<template>
<div class="container">
  <HeaderTop/>
  <nuxt/>
</div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop.vue";
import BottomFooter from "@/components/BottomFooter.vue";
import ListaTruck from "@/components/ListaTruck.vue";
export default {
  components: {
    HeaderTop,
    BottomFooter,
    ListaTruck
  }
}
</script>

<style lang="scss">
  
</style>