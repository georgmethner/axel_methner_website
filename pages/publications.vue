<script lang="ts" setup></script>

<template>
  <div class="h-fit text-white text-center border-b-2 border-gray-800">
    <div class="m-auto py-9 text-6xl font-bold">Publications</div>
    <div class="m-auto flex md:flex-row flex-col w-fit  text-xl font-semibold">
      <nuxt-link
        class="mx-20 my-2 hover:text-gray-400 transition"
        target="_blank"
        to="https://pubmed.ncbi.nlm.nih.gov/?term=Methner+A&sort=date&sort_order=desc"
        >PubMed
      </nuxt-link>
      <nuxt-link
        class="mx-20 my-2 hover:text-gray-400 transition"
        target="_blank"
        to="https://scholar.google.de/citations?user=ZmhDCagAAAAJ&hl=de&oi=ao"
      >
        Google Scholar
      </nuxt-link>
      <nuxt-link
        class="mx-20 mt-2 mb-10 hover:text-gray-400 transition"
        target="_blank"
        to="https://orcid.org/0000-0002-8774-0057"
        >ORCID</nuxt-link
      >
    </div>
  </div>
  <iframe
    class="w-screen h-screen"
    src="https://paperpile.com/shared/x7HCc3"
  ></iframe>
</template>

<style scoped></style>
