<template>
  <Nuxt />
</template>
<style>


.bg-image{
  background-image:url('/_nuxt/assets/images/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg');

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