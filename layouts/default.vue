<script lang="ts" setup>
import Page_footer from "~/components/page_footer.vue";
import Appbar from "~/components/appbar.vue";

const router = useRoute();

const show_appbar = ref(true);

console.log(router.path);

show_appbar.value = router.path !== "/";

watch(() => router.path, () => {
  show_appbar.value = router.path !== "/";
});

</script>

<template>
  <div class="bg-gray-950 h-screen w-screen overflow-x-hidden">
    <appbar v-if="show_appbar" class="static" />
    <div class=" flex w-screen h-52 border-gray-700 border-b-2  text-white text-3xl font-bold">
      <div class="m-auto mx-10">
        Website ist im Aufbau...
      </div>
    </div>
    <slot />
    <page_footer />
  </div>
</template>

<style scoped></style>
