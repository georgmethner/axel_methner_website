<script lang="ts" setup>

const props = defineProps<{
  img: string,
  name: string;
  position: string;
}>();

const getImageUrl = () => {
  console.log(props.img);
  return new URL(`/assets/images/team_members/${props.img}`, import.meta.url);
}
</script>

<template>
  <div class="pb-2 pt-5 shadow-xl">
    <img :src="getImageUrl()" alt="person image" class=" shadow-xl aspect-square w-full object-cover">
    <div class="mt-2">
      <div class="text-white text-2xl font-semibold">{{ props.name }}</div>
      <div class="text-gray-300">{{ props.position }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>