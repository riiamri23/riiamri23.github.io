<template>
  <div class="flex-row justify-center w-full min-h-screen">
    <div
      class="w-8/12 bg-white shadow-md overflow-hidden mx-auto"
    >
      <Nav />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "bg-gray-300",
      },
    };
  },
};
</script>