const path = require('path');

export default {
  mode: "universal",
  target: 'static',
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Syaeful Amri riiamri23",
        name: "Syaeful Amri",
        content: process.env.npm_package_description || "Syaeful Amri portfolio for work, I'm a Profesional Software Developer. I've sacrificed my life to learn programming languages to build apps. I can make your dream come true with my power and knowledge. Experienced Software Engineer with a demonstrated history of working in the retail industry. Skilled in PHP, CodeIgniter, Back-End Web Development, REST API, and HTML. Strong engineering professional with a Bachelor's degree focused in Information Technology from Universitas Muhammadiyah Purwokerto. Explore something about me"
      },
      {name: "google-site-verification", content:"dfI6n5cwvZ7Tc3JNF562s-gNCrpjvu0sKfqWklUv3-E"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/tailwind.css',
    'animate.css/animate.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  robots: {
    UserAgent: '*',
    allow: '/',
  },
  sitemap: {
    hostname: 'https://riiamri23.github.io/',
    gzip: true,
    exclude: ['/contact']
 },

  generate: {
    fallback: true, // Uses '404.html' instead of the default '200.html'
  },

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preseet: {
      stage: 1
    }
  }
}
