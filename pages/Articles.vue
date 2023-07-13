<template>
  <div class="container mx-auto md:mt-5  animate__animated animate__fadeInUp animate__fast md:mb-5">
    <div v-if="mediumArticles">

      <article class="w-full my-2 bg-purple-100 opacity-90 p-2 rounded-md mx-4" v-for="article in mediumArticles?.items" :key="article?.id" >
        <div>
          <span class="font-bold text-lg">{{ `${article.title}` }}</span>,
          <span>{{ getConvertDate(article.published) }}</span>
        </div>
        <div v-html="article.content" class="whitespace-normal overflow-hidden h-14 text-sm w-full"></div><a class="text-blue-400" :href="article.link" target="_blank">See More..</a>
        <div>
          <span v-for="category in article.category" :key="category" class="rounded-lg bg-gray-300 m-1 p-1 text-sm inline-block">{{ category }}</span>
        </div>
      </article>
      <!-- {{ mediumArticles }} -->
    </div>
  </div>
</template>

  <script>
  const { parse } = require('rss-to-json');

  export default ({

    head: {
      title: "Syaeful Amri - Articles",
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

    asyncData ({ params, error }) {
      return parse(`https://medium.com/feed/@riiamri23`)
        .then((res) => {
          return {mediumArticles: res};
        })
        // .catch((e) => {
        //   error({ statusCode: 404, message: 'User not Found' })
        // })
    },
    methods: {
      getConvertDate: function (theDate) {

        return new Date(theDate).toLocaleString('default',{day: 'numeric', month: 'short', year: 'numeric'});
      }
    }
  })
  </script>
