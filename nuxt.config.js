export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jimmytechnology-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue2-scrollspy', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'th'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              home: 'Home',
              service: 'Service',
              about: 'About',
              portfolio: 'Portfolio',
              blog: 'Blog',
              contactButton: 'Contact us',
              heroTitle: 'JimmyTechnology Company',
              heroDescription:
                'We build and deliver Website, Mobile Application and Blockchain with maximum quality and fantastic design. We serve user the best expirience.',
              viewPortfolioButton: 'View Portfolio',
              serviceTitle: 'Our Service',
              uiUx: 'UI/UX',
              webDevelopment: 'Web Development',
              mobileApplication: 'Mobile Application',
              blockchain: 'Blockchain',
            },
            th: {
              home: 'หน้าหลัก',
              service: 'บริการ',
              about: 'เกี่ยวกับเรา',
              portfolio: 'ผลงาน',
              blog: 'ข่าวสาร',
              contactButton: 'ติดต่อเรา',
              heroTitle: 'บริษัท จิมมี่ เทคโนโลยี จำกัด',
              heroDescription:
                'เราสร้าง และส่งมอบ เว็บไซต์, แอพพลิเคชั้น และ เทคโนโลยี บล๊อกเชน ด้วยคุณภาพสูงสุด และ ดีไซน์ที่อลังการ พร้อมมอบประสบการณ์สูงสุดให้ผู้ใช้งาน',
              viewPortfolioButton: 'ดูผลงาน',
              serviceTitle: 'บริการของเรา',
              uiUx: 'ออกแบบ',
              webDevelopment: 'พัฒนาเว็บไซต์',
              mobileApplication: 'โมบายแอพ',
              blockchain: 'บล๊อกเชน',
            },
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    /* module options */
    families: {
      Nunito: true,
    },
    display: 'swap',
  },
}
