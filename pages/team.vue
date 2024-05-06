<script lang="ts" setup>

</script>

<template>
  <div class="flex-col  text-white hidden">
    <img src="../assets/images/die_gang.jpg" alt="" class="object-contain w-screen mx-auto object_space">
    <div class="mx-auto font-bold text-4xl object_space">Members</div>
    <div class="divide-y-2 divide-gray-800">
      <div class="grid grid_space divide-y-2 divide-gray-800 gap-4 mx-auto object_space">
        <PersonCard img="image_0.png" name="Li Zhang" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_1.png" name="Diones Bueno" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_2.png" name="Liliana Rojas-Charry" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_3.png" name="Sara Bitar" position="MSc, PhD student"/>
        <PersonCard img="image_4.png" name="Felix Schmidt" position="MSc, PhD student"/>
        <PersonCard img="image_5.png" name="Timo Baumann" position="MD student"/>
        <PersonCard img="image_6.png" name="Fatih Yasar" position="MD student"/>
        <PersonCard img="image_7.png" name="Christopher Weber" position="MD student"/>
      </div>
      <div class="w-4/5 mx-auto"></div>
    </div>
    <div class="mx-auto mt-52 mb-20 font-bold text-6xl text-center w-4/5">Alumni</div>
    <div class="divide-y-2 divide-gray-800">
      <div class="grid grid_space gap-4 mx-auto w-4/5 py-2 divide-y-2 divide-gray-800">
        <PersonCard img="image_0.png" name="Li Zhang" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_1.png" name="Diones Bueno" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_2.png" name="Liliana Rojas-Charry" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_3.png" name="Sara Bitar" position="MSc, PhD student"/>
        <PersonCard img="image_4.png" name="Felix Schmidt" position="MSc, PhD student"/>
        <PersonCard img="image_5.png" name="Timo Baumann" position="MD student"/>
        <PersonCard img="image_6.png" name="Fatih Yasar" position="MD student"/>
        <PersonCard img="image_7.png" name="Christopher Weber" position="MD student"/>
        <PersonCard img="image_8.png" name="Li Zhang" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_9.png" name="Diones Bueno" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_10.png" name="Liliana Rojas-Charry" position="PhD, postdoctoral scientist"/>
        <PersonCard img="image_11.png" name="Sara Bitar" position="MSc, PhD student"/>
        <PersonCard img="image_12.png" name="Felix Schmidt" position="MSc, PhD student"/>
        <PersonCard img="image_13.png" name="Timo Baumann" position="MD student"/>
        <PersonCard img="image_14.png" name="Fatih Yasar" position="MD student"/>
        <PersonCard img="image_15.png" name="Christopher Weber" position="MD student"/>
      </div>
      <div class="w-4/5 mx-auto"></div>
    </div>

  </div>
</template>

<style scoped>
.object_space {
  @apply p-5 sm:p-10 md:p-20 lg:px-40 xl:px-60 ;
}
.grid_space {
  @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5;
}
</style>