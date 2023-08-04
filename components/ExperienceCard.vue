<template>

    <article class="w-full cursor-pointer relative has-tooltip my-2 bg-purple-100 opacity-90 p-2 rounded-md experienced" x-data="{ hover: false }"
        @mouseenter="hover = true" @mouseleave="hover = false">
      <router-link :to="`/Experience?id=${experience?.id}`">
        <div class="overflow-hidden grid items-stretch">
          <div class="h-full rounded-md pt-per56 bg-cover relative">
            <div data-picture="true">
              <picture>
                <source type="image/webp" :srcset="getImageUrl(experience.image[0])" />
                <img :src="getImageUrl(experience.image[0])" :alt="experience.company" class="object-contain h-full top-0 left-0 block absolute rounded-md" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
        <div class="flex-col relative mt-1">
          <div class="flex overflow-hidden mb-2">
            <h2 class="text-black block">{{ experience.company }}</h2>
          </div>
          <div class="flex-row space-y-1 overflow-hidden">
            <div class="text-sm">
              <img alt="location" width="18" class="inline-block" src="@/assets/svg/location.svg" />
              <span>{{ experience.address }}</span>
            </div>
            <div class="text-sm">
              <img alt="out date" width="18" class="inline-block" src="@/assets/svg/suitcase.svg" />
              <span>{{ experience.position }}</span>
            </div>
            <div class="text-sm">
              <img alt="join date" width="18" class="inline-block" src="@/assets/svg/in.svg" />
              <span>{{ experience.startDate }}</span>
            </div>
            <div class="text-sm">
              <img alt="out date" width="18" class="inline-block" src="@/assets/svg/out.svg" />
              <span>{{ experience.endDate !== '' ? experience.endDate : '-' }}</span>
            </div>
          </div>
          <hr class="m-2"/>
          <!--- hidden --->
          <div class="flex-row space-y-2 overflow-hidden">
            <p class="text-xs whitespace-pre-line">{{ experience.description }}</p>
          </div>
        </div>
      </router-link>
      <!-- <div class="relative"> -->

      <span class='absolute top-0 right-0 tooltip rounded shadow-lg px-1 bg-purple-300'>Click for the detail</span>
      <!-- </div> -->
    </article>
</template>
<style scoped>

.experienced {
  transition: transform .2s;
}
.experienced:hover{

  -ms-transform: scale(1.15); /* IE 9 */
  -webkit-transform: scale(1.15); /* Safari 3-8 */
  transform: scale(1.15);
}
</style>

<script>
export default ({
  props: ['experience'],
  methods: {
    getImageUrl: function (src) {
      // let hostName = "";
      // if (process.client) {
      //   hostName = window.location.origin;
      // }
      // return new URL(src, import.meta.url).href
      // return src
      return require(`~/assets/images/${src}`);
    }
  }

});
</script>
