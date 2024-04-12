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
    <slot />
    <page_footer />
  </div>
</template>

<style scoped></style>
