<template>
  <div class="index_page">
    <router-view></router-view>
    <mi-nav></mi-nav>
  </div>
</template>

<script>
import nav from "@/components/nav.vue";
export default {
  name: "IndexPage",
  components: {
    "mi-nav": nav,
  },
};
</script>

<style>
</style>