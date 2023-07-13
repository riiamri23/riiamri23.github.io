<template>
<div>
  <Nav />
    <Nuxt />
</div>
</template>
<style>

body {
    background-image: url(assets/images/bg.svg);
    user-select: none;
    font-family: "Quicksand", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    background-color: #fff;
    background-attachment: fixed;
    color: #000;
}

/* .bg-image{
  background-image:url('/_nuxt/assets/images/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg');

} */
</style>
<script>
import Nav from '~/components/Nav.vue';
export default {
  components: {
    Nav: Nav,
  },
  head() {
    return {
      bodyAttrs: {
        class: "font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-image",

      },
    };
  },
};
</script>
