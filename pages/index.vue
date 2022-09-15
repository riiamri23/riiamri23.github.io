<template>

    <div class="relative md:flex flex-row items-center mt-20">
        <div class="md:w-1/3">
            <div class="relative w-72 m-auto">
                <img 
                    class="rounded-full border shadow-sm w-full" 
                    src="~/assets/images/indodevniaga_3688.jpeg"
                    id="avatar-img"
                    alt="Itsuka" />
            </div>
        </div>
        <div class="md:w-2/3 px-2">
            <h1 class="text-4xl font-semibold animate__animated animate__fadeInUp animate__fast">Hi 👋, <br/>
            I'm Syaeful Amri.
            </h1>
            <div class="my-4 md:w-4/5">
                <p class="text-lg mb-4">I’ve no life and I’m a programmer. I've sacrificed my life to learn programming languages to build apps. I can make your dream come true with my power and knowledge.</p>
                <div id="button" class="flex">
                    <router-link to="/project" class="text-white bg-gray-600 px-3 py-2 rounded mx-2 animate__animated animate__wobble animate__delay-2s animate__fast">Explore ></router-link>
                    <a href="/Portfolio_Syaeful Amri.pdf" download class="text-white bg-red-500 px-3 py-2 rounded mx-2">Download CV</a>
                </div>
            </div>
            <div id="sosmed-link" class="flex justify-center md:justify-start animate__animated animate__fadeInUp animate__delay-1s">
                <a target="_blank" rel="noopener" :href="socialLinks.github" class="mx-4">
                    <GithubIcon w="25px" h="25px" />
                </a>
                <a target="_blank" rel="noopener" :href="socialLinks.instagram" class="mx-4">
                    <InstagramIcon w="25px" h="25px" />
                </a>
                <a target="_blank" rel="noopener" :href="socialLinks.linkedIn" class="mx-4">
                    <LinkedinIcon w="25px" h="25px" />
                </a>
                <a target="_blank" rel="noopener" :href="socialLinks.facebook" class="mx-4">
                    <FacebookIcon w="25px" h="25px" />
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import InstagramIcon from "vue-ionicons/dist/logo-instagram.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {

  components: {
    GithubIcon,
    LinkedinIcon,
    FacebookIcon,
    InstagramIcon,
    MailIcon,
  },

  head: {
    title: "Hi, My name is Syaeful Amri",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Syaeful Amri portfolio for work, i can do what you need, my domain web is riiamri github io i hope someone can search my web in their chrome or firefox or whatever, Syaeful Amri Profesional Software Developer, I’ve no life and I’m a programmer. I've sacrificed my life to learn programming languages to build apps. I can make your dream come true with my power and knowledge.",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "portfolio rii amri github",
      },
      {
        property: "og:description",
        content:
          "Syaeful Amri bekerja di PT. Indodev Niaga Internet, pernah kuliah di universitas muhammadiyah purwokerto",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://avatars.githubusercontent.com/u/39664310?v=4",
      },
    ],
  },

  data() {
    return {
    //   avatar: require("@/assets/avatar-1.webp"),
      // ADD YOUR SOCIAL LINKS HERE 👇
      socialLinks: {
        github: "https://github.com/riiamri23",
        instagram: "https://www.instagram.com/riiamri_/",
        linkedIn: "https://www.linkedin.com/in/syaeful-amri-69296a1a0/",
        facebook: "https://www.facebook.com/Riiamri2/",

      },
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },

}
</script>