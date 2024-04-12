<script lang="ts" setup>

</script>

<template>
  <div class="relative h-screen text-white">
    <img src="~/assets/images/index_bg.jpg" alt="" class="absolute opacity-70 w-screen h-screen object-cover"/>
    <appbar class="absolute"/>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 	">
      <div class="w-screen text-center">
        <div class="text-6xl font-semibold ">Methner Lab</div>
        <div class="mt-10 object_space text-xl font-light underline decoration-gray-600">
          Exploring Mitochondrial Dysfunction in Neurodegeneration: Cell and Fly Models
        </div>

      </div>
      <button class="w-screen py-10 " v-on:click="">
        <svg class="animate-pulse mx-auto " data-darkreader-inline-fill=""
             height="18.592px" role="presentation" style="fill: rgb(255, 255, 255); --darkreader-inline-fill: #e8e6e3;"
             viewBox="0 0 38.417 18.592"
             width="38.417px" x="0px" y="0px">
          <g>
            <path
                d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
  <div class="bg-gray-900 flex flex-row object_space h-screen">
    <div class="text-gray-300 mx-auto  md:w-3/4 md:text-xl">
      The Methnerlab works on mitochondrial dysfunction in neurodegenerative diseases.
      We use cell lines and primary cultures, patient-derived neurons differentiated
      from induced pluripotent stem cells and fly models of neurological diseases.
      Current projects focus on the hereditary polyneuropathy Charcot-Marie-Tooth disease,
      autism spectrum disorder, Parkinson’s disease and the role of ferroptosis in Wallerian degeneration.
      The Methnerlab is mainly funded by the Deutsche Forschungsgemeinschaft and is located in
      the Institute of Molecular Medicine at the University Medical Center Mainz.
    </div>


  </div>
</template>

<style scoped>
.object_space {
  @apply p-5 sm:p-10 md:p-20 lg:px-40 xl:px-60 text-lg;
}
</style>