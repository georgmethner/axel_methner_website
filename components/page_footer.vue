<template>
  <div class="shadow-gray-400">
    <div class="text-white sm:text-lg border-y-2 border-gray-800 bg-gray-900 grid grid-cols-3 md:grid-cols-6 justify-center">
      <nuxt-link class="footerButton" to="/impressum">Impressum</nuxt-link>
      <nuxt-link class="footerButton" to="/">Home</nuxt-link>
      <nuxt-link class="footerButton" to="/research">Research</nuxt-link>
      <nuxt-link class="footerButton" to="/publications">Publications</nuxt-link>
      <nuxt-link class="footerButton" to="/team">Team</nuxt-link>
      <nuxt-link class="footerButton" to="/contact">Contact</nuxt-link>

    </div>

    <div class="text-white text-center p-1 bg-gray-900 font-semibold">
      MethnerLab
    </div>
  </div>
</template>

<style scoped>
.footerButton {
  @apply hover:underline px-5 py-1  lowercase decoration-gray-500 text-center  decoration-2;
}
</style>
<script lang="ts" setup>
</script>