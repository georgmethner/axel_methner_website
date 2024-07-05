<script lang="ts" setup></script>

<template>
  <div class="w-screen min-h-screen">
    <div class="sm:flex">
      <img
        alt=""
        class="aspect-square sm:w-1/3 object-cover max p-5"
        src="~/assets/images/axel_methner.jpg"
      />
      <div class="text-white text-xl p-5 my-auto">
        <div class="font-semibold text-3xl">Axel Methner, MD</div>
        <div class="p-2">
          Professor of Neurology <br />
          University Medical Center Mainz <br />
        </div>
        <div class="font-semibold text-2xl">Visiting Address:</div>
        <div class="pt-2 px-2">
          Institute of Molecular Medicine <br />
          Building 308A, first floor <br />
        </div>
        <nuxt-link
          class="px-2 pb-2 text-blue-500 underline"
          target="_blank"
          to="https://maps.app.goo.gl/z2yEgiF1uXW2ZMsr6"
          >Langenbeckstr. 1
        </nuxt-link>
        <div class="font-semibold text-2xl pt-2">Mailing Address:</div>
        <div class="p-2">axel.methner@gmail.com</div>
      </div>
    </div>
    <div class="border-t-2 border-gray-800"></div>
  </div>
</template>

<style scoped></style>
