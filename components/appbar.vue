<script lang="ts" setup>

</script>

<template>
  <div class="fixed w-full">
    <div
        class="border-b-2 border-gray-700 bg-gray-900 h-20 w-full shadow-2xl text-white font-semibold inline-flex flex-row relative">


      <div class="w-1/2 h-full flex">

        <div class="flex">
          <nuxt-link class="px-5 text-2xl my-auto" to="/"> MethnerLab</nuxt-link>
        </div>

      </div>


      <div
          class="w-1/2 h-full inline-flex flex-row-reverse divide-x-2 divide-x-reverse divide-gray-700 decoration-gray-400">


        <nuxt-link class="pl-5 pr-10 my-auto flex hover:underline" to="/contact">CONTACT</nuxt-link>
        <nuxt-link class="px-5 h-fit my-auto flex hover:underline" to="/team">TEAM</nuxt-link>
        <nuxt-link class="px-5 h-fit my-auto flex hover:underline" to="/publications">PUBLICATIONS</nuxt-link>
        <nuxt-link class="px-5 h-fit my-auto flex hover:underline" to="/research">RESEARCH</nuxt-link>

      </div>


    </div>
  </div>


</template>