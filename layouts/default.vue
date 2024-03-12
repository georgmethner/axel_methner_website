<script lang="ts" setup>

import Page_footer from "~/components/page_footer.vue";
</script>

<template>
  <div class="bg-gray-950 h-screen w-screen overflow-x-hidden">
    <appbar/>
    <slot/>
    <page_footer/>
  </div>
</template>

<style scoped>

</style>