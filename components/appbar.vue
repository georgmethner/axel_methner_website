<script lang="ts" setup>
const open_menu = ref(false);
</script>

<template>
  <div class="w-full">
    <div
      class="border-b-2 border-gray-700 bg-gray-900 h-20 w-full shadow-2xl text-white font-semibold inline-flex flex-row relative"
    >
      <div class="w-1/2 h-full flex">
        <div class="flex">
          <nuxt-link class="px-5 text-2xl my-auto" to="/">
            MethnerLab</nuxt-link
          >
        </div>
      </div>

      <div class="visible sm:hidden flex-row-reverse inline-flex w-1/2">
        <div class="my-auto mr-6" @click="open_menu=!open_menu">
          <svg
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            style="fill: rgb(255, 255, 255); --darkreader-inline-fill: #e8e6e3;"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"
            />
          </svg>
        </div>
      </div>

      <div class="absolute bg-gray-900 border-2 border-gray-700 w-fit top-14 right-4 visible sm:hidden" v-if="open_menu">
        <nuxt-link to="/research" @click="open_menu=false" class="p-3 h-10"> RESEARCH </nuxt-link> <br>
        <nuxt-link to="/publications" @click="open_menu=false" class="p-3 h-10"> PUBLICATIONS </nuxt-link> <br>
        <nuxt-link to="/team" @click="open_menu=false" class="p-3 h-10"> TEAM </nuxt-link> <br>
        <nuxt-link to="/contact" @click="open_menu=false" class="p-3 h-10"> CONTACT </nuxt-link> <br>

      </div>

      <div
        class="hidden sm:visible w-1/2 h-full sm:inline-flex flex-row-reverse divide-x-2 divide-x-reverse divide-gray-700 decoration-2 decoration-gray-400"
      >
        <nuxt-link class="pl-5 pr-10 my-auto flex hover:underline" to="/contact"
          >CONTACT</nuxt-link
        >
        <nuxt-link class="px-5 h-fit my-auto flex hover:underline" to="/team"
          >TEAM</nuxt-link
        >
        <nuxt-link
          class="px-5 h-fit my-auto flex hover:underline"
          to="/publications"
          >PUBLICATIONS</nuxt-link
        >
        <nuxt-link
          class="px-5 h-fit my-auto flex hover:underline"
          to="/research"
          >RESEARCH</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
