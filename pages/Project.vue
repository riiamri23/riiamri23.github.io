<template>
  <div class="container mx-auto mt-10  animate__animated animate__fadeInUp animate__fast">
    <h1 class="text-4xl text-center mb-10">Recents Projects</h1>
    <div id="list-projects" class="flex-row">
      <!-- My Wibudesu Project -->
      <div class="md:flex flex-row items-start mx-10">
        <div class="md:w-1/2 m-2">
          <img src="~/assets/images/wibudesu.jpeg" alt="dummy project" />
        </div>
        <div class="md:w-1/2 m-2">
          <h1 class="text-3xl">Wibudesu</h1>
          <hr class="dope" />
          <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
            <p>
              Watching some anime, manga and about anime news, you can see
              everything here
            </p>
            <span
              ><a
                class="text-blue-500 hover:underline font-medium"
                :href="demoLinks.wibudesuDemo"
                target="_blank"
                >Check it Out </a
              ><MdLinkIcon class="inline-block" w="15px" h="15px"
            /></span>
            <hr class="line" />
            <div>
              <span
                ><a
                  :href="projectLinks.wibudesuLink"
                  target="_blank"
                  class="text-blue-500 hover:underline font-medium"
                  >View Source Code </a
                ><GithubIcon class="inline-block" w="15px" h="15px"
              /></span>
            </div>
          </div>
        </div>
      </div>
      <!-- My Pokedex Project -->
      <div class="md:flex flex-row items-start mx-10">
        <div class="md:w-1/2 m-2">
          <img src="~/assets/images/mypokedex.jpeg" alt="dummy project" />
        </div>
        <div class="md:w-1/2 m-2">
          <h1 class="text-3xl">My Pokedex</h1>
          <hr class="dope" />
          <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
            <p>
              Look at pokedex you love there, you can see every pokemon here
            </p>
            <span
              ><a
                class="text-blue-500 hover:underline font-medium"
                :href="demoLinks.mypokedexDemo"
                target="_blank"
                >Check it Out </a
              ><MdLinkIcon class="inline-block" w="15px" h="15px"
            /></span>
            <hr class="line" />
            <div>
              <span
                ><a
                  :href="projectLinks.mypokedexLink"
                  target="_blank"
                  class="text-blue-500 hover:underline font-medium"
                  >View Source Code </a
                ><GithubIcon class="inline-block" w="15px" h="15px"
              /></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chatheroin Project -->
      <div class="md:flex flex-row items-start mx-10">
        <div class="md:w-1/2 m-2">
          <img src="~/assets/images/chatheroin.png" alt="dummy project" />
        </div>
        <div class="md:w-1/2 m-2">
          <h1 class="text-3xl">Chatheroin</h1>
          <hr class="dope" />
          <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
            <p>
              Do you want chat with Open AI GPT3, there is
            </p>
            <span
              ><a
                class="text-blue-500 hover:underline font-medium"
                :href="demoLinks.chatheroinDemo"
                target="_blank"
                >Check it Out </a
              ><MdLinkIcon class="inline-block" w="15px" h="15px"
            /></span>
            <hr class="line" />
            <div>
              <span
                ><a
                  :href="projectLinks.chatheroinLink"
                  target="_blank"
                  class="text-blue-500 hover:underline font-medium"
                  >View Source Code </a
                ><GithubIcon class="inline-block" w="15px" h="15px"
              /></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chatheroin Project -->
      <div class="md:flex flex-row items-start mx-10">
        <div class="md:w-1/2 m-2">
          <img src="~/assets/images/kekaibo.png" alt="dummy project" />
        </div>
        <div class="md:w-1/2 m-2">
          <h1 class="text-3xl">Kekaibo</h1>
          <hr class="dope" />
          <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
            <p>
              You want rekap your money? then you in the right place for it.
            </p>
            <span
              ><a
                class="text-blue-500 hover:underline font-medium"
                :href="demoLinks.chatheroinDemo"
                target="_blank"
                >Check it Out </a
              ><MdLinkIcon class="inline-block" w="15px" h="15px"
            /></span>
            <hr class="line" />
            <div>
              <span
                ><a
                  :href="projectLinks.chatheroinLink"
                  target="_blank"
                  class="text-blue-500 hover:underline font-medium"
                  >View Source Code </a
                ><GithubIcon class="inline-block" w="15px" h="15px"
              /></span>
            </div>
          </div>
        </div>
      </div>
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
</style>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import MdLinkIcon from "vue-ionicons/dist/md-link.vue";
export default {
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
      projectLinks: {
        wibudesuLink: "https://github.com/riiamri23/wibudesu2",
        mypokedexLink: "https://github.com/riiamri23/mypokedex",
        chatheroinLink: "https://github.com/riiamri23/chatheroin",
        kakeiboLink: "https://github.com/riiamri23/kakeibo",
      },
      demoLinks: {
        wibudesuDemo: "https://wibudesu.vercel.app/",
        mypokedexDemo: "https://mypokedex-ten.vercel.app/",
        chatheroinDemo: "https://chatheroin.vercel.app/",
        kakeiboDemo: "https://kakeibo-six.vercel.app/",
      },
    };
  },
  components: {
    GithubIcon,
    MdLinkIcon,
  },
};
</script>
