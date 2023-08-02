<template>
  <div class="container mx-auto md:mt-5  animate__animated animate__fadeInLeft animate__fast md:mb-5">
      <div class=" mb-10 ml-4">
        <h1 class="md:text-4xl text-2xl font-semibold line-after"><router-link to="/Experiences"><img alt="out date" width="25" class="inline-block mr-2" src="@/assets/svg/back-arrow-direction-down-right-left-up-svgrepo-com.svg" /></router-link>PT Indodev Niaga Internet</h1>
      </div>
      <div id="list-projects" class="md:flex md:space-x-2 space-y-2 md:space-y-0 my-2 mx-5">
        <div class="bg-purple-100 md:w-1/2 w-full px-2 py-4 rounded-md">
          <div data-picture="true" class="mx-10 my-2">
            <picture>
              <source type="image/webp" :srcset="getImageUrl(experienceDetail.image[0])" />
              <img :src="getImageUrl(experienceDetail.image[0])" :alt="experienceDetail.company" class="object-contain h-full top-0 left-0 block rounded-md" loading="lazy" />
            </picture>
          </div>
          <h1 class="font-bold text-lg mb-2">{{ experienceDetail.company }}</h1>
          <p class="text-md whitespace-pre-line">{{ experienceDetail.aboutCompany }}</p>
          <hr>
          <br />
          <div class="text-md">
              <h2 class="font-bold">My Job task</h2>
              <ul style="list-style-type:circle" class="ml-3">
                <li v-for="val in experienceDetail.jobTask" :key="val">{{ val }}</li>
              </ul>

          </div>
        </div>
        <div class="bg-purple-100 md:w-1/2 w-full px-2 py-4 rounded-md">
          <h1 class="font-bold text-lg mb-2">My Adventure</h1>
          <div v-for="adv in experienceDetail.adventure" :key="adv?.name">

            <picture>
              <source type="image/webp" :srcset="getImageExpUrl(adv?.images?.[0]?.image)" />
              <img :src="getImageExpUrl(adv?.images?.[0]?.image)" :alt="adv?.images?.[0]?.text && 'not found' " class="object-contain h-full top-0 left-0 block rounded-md w-1/2" loading="lazy" />
            </picture>
            <h2 class="font-bold">{{ adv?.name }}</h2>
            <p>{{ adv?.summary }}</p>
            <div class="my-2">
              <h2 class="font-bold">Key Learning Point</h2>
              <ul style="list-style-type:circle" class="ml-3">
                <li v-for="val in adv?.keyLearningPoint" :key="val">{{ val }}</li>
              </ul>
            </div>
            <div class="my-2">
              <h2 class="font-bold">Programming Language Or Framework</h2>
                <span class="inline-block m-1" v-for="val in adv?.programmingLanguageOrFramework" :key="val"><img class="w-8 h-8" :src="val?.icon" :alt="val?.name"></span>
            </div>
            <hr class="my-3" />
          </div>
        </div>
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

import experienceDetailJson from '~/assets/json/experiences.json';

export default ({
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
      experienceDetail: this.getExperienceDetail(experienceDetailJson)
    }
  },
  methods: {
    getImageUrl: function (src) {
      // let hostName = "";
      // if (process.client) {
      //   hostName = window.location.origin;
      // }
      // return new URL(src, import.meta.url).href
      // return src
      return require(`~/assets/images/${src}`);
    },
    getImageExpUrl: function (src = '') {
      if(src === '') return require(`~/assets/images/No_Image_Available.webp`);
      return require(`~/assets/images/experiences/${src}`);
    },
    getExperienceDetail: function (json){
      let jsonDetail = {};
      for(let i = 0; json.length > i;i++){
        if(json[i].id === this.$route.query.id){
          jsonDetail = json[i];
          break;
        }
      }
      // console.log(jsonDetail)
      return jsonDetail;
    }
  },
  mounted(){
    this.getExperienceDetail(experienceDetailJson)
  }
})
</script>
