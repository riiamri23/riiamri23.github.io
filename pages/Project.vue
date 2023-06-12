<template>
  <div class="container mx-auto md:mt-5  animate__animated animate__fadeInUp animate__fast">
    <h1 class="text-4xl text-center mb-10">My Projects</h1>
    <div id="list-projects" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-4 justify-start my-2 mx-5">
      <article class="w-full relative content" v-for="project in projects" :key="project.name">
        <div class="inset-0 overflow-hidden absolute bg-purple-100 opacity-90 rounded-md m-min1 contain-bg"></div>
        <div class="overflow-hidden relative grid items-stretch">
          <div class="h-full rounded-md pt-per56 bg-cover relative">
            <div data-picture="true">
              <picture>
                <source type="image/webp" v-bind:srcset="project.imgSrc[0]" />
                <img v-bind:src="project.imgSrc[0]" alt="dummy project" class="object-contain h-full top-0 left-0 block absolute rounded-md" />
              </picture>
            </div>
          </div>
        </div>
        <div class="flex-col relative mt-1 ml-5">
          <div class="flex overflow-hidden">
            <h2 class="text-black block">{{ project.name }}</h2>
          </div>
          <div class="flex-row icon-box">
            <p class="text-xs">
              {{ project.desc }}
            </p>
            <div coass="flex">
              <a class="text-xs text-center text-blue-500 hover:underline font-medium" :href="project.webLink" target="_blank" ><MdLinkIcon class="inline-block" w="15px" h="15px" /> Web</a>

              <a :href="project.repoLink" target="_blank" class="text-xs text-blue-500 hover:underline font-medium" ><GithubIcon class="inline-block" w="15px" h="15px" /> Github</a>

            </div>
          </div>
        </div>
      </article>

    </div>
  </div>
</template>

<style scoped>
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
hr.line {
  width: 90%;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}

.contain-bg {
  clip-path: inset(2rem -2rem 3.5rem 2rem round 10px);
  transition: clip-path .3s ease .1s;
}

:hover > .contain-bg {
  clip-path: inset(0 0 1rem 0 round 10px);
  transition-delay: 0s;
}

.icon-box {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
:hover > div > .icon-box {
  visibility: visible;
  opacity: 1;
}

/* :hover > .content > div:nth-child(3) > .icon-box {
  visibility: visible;
  opacity: 1;
} */
@media only screen and (min-width: 768px){

}

</style>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import MdLinkIcon from "vue-ionicons/dist/md-link.vue";
export default {

  // will adding this style
  // clip-path: inset(2rem -2rem 1rem 2rem round 10px);
  // transition: clip-path .3s ease .1s;
  head: {
    title: "Syaeful Amri - Project",
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
      constants: {
        per56: 56.25
      },
      projects: [
        {
          name: "wibudesu",
          desc: "Watching some anime, manga and about anime news, you can see everything here",
          repoLink: "https://github.com/riiamri23/wibudesu2",
          webLink: "https://wibudesu.vercel.app/",
          imgSrc: ["https://raw.githubusercontent.com/riiamri23/wibudesu2/master/src/assets/images/anime_home.png"]
        },
        {
          name: "mypokedex",
          desc: "Look at pokedex you love there, you can see every pokemon here",
          repoLink: "https://github.com/riiamri23/mypokedex",
          webLink: "https://mypokedex-ten.vercel.app/",
          imgSrc: ["https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"]
        },
        {
          name: "chatheroin",
          desc: "Do you want chat with Open AI GPT3, there is",
          repoLink: "https://github.com/riiamri23/chatheroin",
          webLink: "https://chatheroin.vercel.app/",
          imgSrc: ["https://raw.githubusercontent.com/riiamri23/chatheroin/main/src/assets/ssaapp.png"]
        },
        {
          name: "kakeibo",
          desc: "You want rekap your money? then you in the right place",
          repoLink: "https://github.com/riiamri23/kakeibo",
          webLink: "https://kakeibo-six.vercel.app/",
          imgSrc: ["https://raw.githubusercontent.com/riiamri23/kakeibo/main/src/assets/example/home.png"]
        },
        {
          name: "gamelist",
          desc: "Look at this game i've made for you",
          repoLink: "https://github.com/riiamri23/gamelist/",
          webLink: "https://riiamri23.github.io/gamelist/",
          imgSrc: ["https://raw.githubusercontent.com/riiamri23/gamelist/main/assets/screenshot/pacman.png"]
        },
      ],
    };
  },
  components: {
    GithubIcon,
    MdLinkIcon,
  },
};
</script>
