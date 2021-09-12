<template>
  <Nuxt />
</template>
<style scoped>
.bg-image{
  background-image:url('https://source.unsplash.com/1L71sPT5XKc');
}
</style>
<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-image",
      },
    };
  },
};
</script>