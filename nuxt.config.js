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
              about: 'About us',
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
              uiUxDescription1: 'We use specific tools for designing',
              uiUxDescription2: 'such as Figma and Adobe XD',
              webDevelopmentDescription1:
                'We use new technologies to build a website.',
              webDevelopmentDescription2:
                'such as React, VueJS, Laravel, NodeJS and Golang',
              mobileApplicationDescription1: 'We use high performance tools',
              mobileApplicationDescription2: 'such as Flutter and React Native',
              blockchainDescription1: 'We provide blockchain technologies',
              blockchainDescription2: 'such as Solidity and Web3',
              aboutDescription:
                'JimmyTechnology is a software house company launched in 2022 lead by an experience freelance software developer. We build and devliver on-demand software in both Web and Mobile Application. We also integrate blockchain technology to our product. We are looking forward to be an outstanding company in Thailand.',
              ourPortfolio: 'Our Portfolio',
              seeAll: 'See all',
              email: 'Email',
              phone: 'Phone',
              address: 'Address',
              addressDetail: '167 Moo.12 Pongngam Maesai Chiang Rai 57130',
              name: 'Name',
              message: 'Message',
              send: 'Send',
              footer: '© 2022. All rights reserved JimmyTechonlogy co., ltd.',
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
                'เราสร้าง และส่งมอบ เว็บไซต์, แอพพลิเคชั่น และ เทคโนโลยี บล๊อกเชน ด้วยคุณภาพสูงสุด และ ดีไซน์ที่อลังการ พร้อมมอบประสบการณ์สูงสุดให้ผู้ใช้งาน',
              viewPortfolioButton: 'ดูผลงาน',
              serviceTitle: 'บริการของเรา',
              uiUx: 'ออกแบบ',
              webDevelopment: 'พัฒนาเว็บไซต์',
              mobileApplication: 'โมบายแอพ',
              blockchain: 'บล๊อกเชน',
              uiUxDescription1: 'เราใช้เครื่องมือเฉพาะทางสำหรับออกแบบ',
              uiUxDescription2: 'เช่น Figma และ AdobeXD',
              webDevelopmentDescription1:
                'เราใช้เทคโนโลยีใหม่ๆในการเขียนเว็บไซต์',
              webDevelopmentDescription2:
                'เช่น React, VueJS, Laravel, NodeJS และ Golang',
              mobileApplicationDescription1: 'เราใช้เครื่องมือประสิทธิภาพสูง',
              mobileApplicationDescription2: 'เช่น Flutter และ React Native',
              blockchainDescription1: 'เราใช้เทคโนโลยี Blockchain',
              blockchainDescription2: 'เช่น Solidity และ Web3',
              aboutDescription:
                'บริษัท จิมมี่ เทคโนโลยี จำกัด เป็น Software House ก่อตั้งเมื่อปี 2022 โดยโปรแกรมเมอร์ฟรีแลนซ์ ประสบการณ์มากกว่า 4 ปี เราพัฒนา และ ส่งมอบ ซอฟต์แวร์ตามความต้องการของลูกค้า ทั้ง เว็บไซต์ และ แอพพลิเคชั่นมือถือ เรายังใช้เทคโนโลยี Blockchain กับโปรเจ็คของเรา เรามีเป้าหมายที่จะเป็นบริษัท Software House ชั้นนำของประเทศไทย',
              ourPortfolio: 'ผลงานของเรา',
              seeAll: 'ดูทั้งหมด',
              email: 'อีเมลล์',
              phone: 'โทรศัพท์',
              address: 'ที่อยู่',
              addressDetail:
                '167 หมู่ที่ 12 ต.โป่งงาม อ.แม่สาย จ.เชียงราย 57130',
              name: 'ชื่อ',
              message: 'ข้อความ',
              send: 'ส่ง',
              footer: '© 2022. สงวนสิทธิ บริษัท จิมมี่ เทคโนโลยี จำกัด',
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
