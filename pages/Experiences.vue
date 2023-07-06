<template>
  <div class="container mx-auto md:mt-5  animate__animated animate__fadeInUp animate__fast md:mb-5">
      <h1 class="md:text-4xl text-2xl font-semibold line-after mb-10 ml-4">My Experiences</h1>
      <div id="list-projects" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 justify-start my-2 mx-5">
        <ExperienceCard v-for="experience in experiences" :key="experience.company" :experience="experience" />
      </div>
    </div>
</template>
<style scoped>
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 30%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}

</style>

<script>
import ExperienceCard from '../components/ExperienceCard.vue';
import experienceJson from '~/assets/json/experiences.json';

export default ({
  components:{
    ExperienceCard: ExperienceCard,
  },
  head: {
    title: "Syaeful Amri - Experiences",
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
  data(){
    return {
      experiences: experienceJson,
    }
  }
})
</script>
