<template>
  <div class="flex-row justify-center w-full min-h-screen mt-16">
    <!-- My Name -->
    <h1 class="text-5xl text-center">Syaeful Amri</h1>
    <div class="px-12 py-8 m-12 border-2">
      <p>
        hi, i’m a programmer and i’ve no life. I've sacrificed my life for learn
        how to program for build an apps. I can make your dreams come true with my
        power and knowledge.
      </p>
    </div>
    <!--- Offer --->
    <div class="container mx-auto px-12">
      <div class="flex flex-wrap justify-between -m-4 px-8">
        <div class="p-8 w-1/2">
          <div class="flex rounded-lg h-full flex-col">
            <WebSvg />
            <h1 class="text-2xl font-semibold">Web Design</h1>
            <p>Whether it's designing a new product or refreshing the design of an existing application, I'm happy to help making your project beautiful and easy to use.</p>
          </div>
        </div>
        <div class="p-8 w-1/2">
          <div class="flex rounded-lg h-full flex-col">
            <FrontEndSvg />
            <h1 class="text-2xl font-semibold">Front-end Development</h1>
            <p>Modern browsers offer a lot of possibilities but also demand for a specialized approach. I translate designs to production ready HTML, CSS and Javascript. Vue.js and React complete my front-end stack.</p>
          </div>
        </div>
        <div class="p-8 w-1/2">
          <div class="flex rounded-lg h-full flex-col">
            <MobileSvg />
            <h1 class="text-2xl font-semibold">Mobile design</h1>
            <p>I can provide you with a custom mobile app design, tailored for your tech stack (whether your app is iOS, Android, React Native or based on web technology).</p>
          </div>
        </div>
        <div class="p-8 w-1/2">
          <div class="flex rounded-lg h-full flex-col">
            <ConsultancySvg />
            <h1 class="text-2xl font-semibold">Consultancy</h1>
            <p>I'm happy to provide my expertise to your team. An audit of your design architecture or a workshop on modern web technology are just a few of the options.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- My Footer -->

  </div>
</template>

<script>
import WebSvg from '~/components/svgs/WebSvg.vue';
import FrontEndSvg from '~/components/svgs/FrontEndSvg.vue';
import MobileSvg from '~/components/svgs/MobileSvg.vue';
import ConsultancySvg from '~/components/svgs/ConsultancySvg.vue';

export default {
  components: {WebSvg, FrontEndSvg, MobileSvg, ConsultancySvg},
};
</script>

<style scoped>
</style>