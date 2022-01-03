<template>
  <nav
    :class="{ 'bg-opacity-90 backdrop-blur shadow-lg': scrollPosition > 50 }"
    class="fixed z-40 flex justify-between w-full px-12 py-5 space-x-10 bg-white lg:px-32"
  >
    <div class="flex items-center">
      <img
        v-scroll-to="'#home'"
        class="cursor-pointer w-60"
        src="/logo.svg"
        alt="logo"
      />
    </div>
    <div>
      <ul
        v-scroll-spy-link
        v-scroll-spy-active="{
          class: 'activeLink',
        }"
        class="items-center hidden space-x-8 lg:flex"
      >
        <li
          v-scroll-to="`#${item.link}`"
          :key="item.link"
          v-for="item in menuLists"
          class="text-lg font-semibold text-gray-600 cursor-pointer hover:text-gray-700"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <div class="items-center hidden mr-6 lg:flex">
        <button
          v-scroll-to="'#contact'"
          class="px-10 py-2 font-semibold text-white duration-300 transform bg-blue-900 rounded hover:scale-110 hover:shadow-md"
        >
          {{ $t('contactButton') }}
        </button>
      </div>
      <div class="flex items-center">
        <NuxtLink :to="switchLocalePath('en')">
          <button
            :class="
              $i18n.locale === 'en'
                ? 'pr-3 text-lg font-semibold text-blue-800 border-r-2 border-gray-500'
                : 'pr-3 text-lg font-semibold text-gray-500 border-r-2 border-gray-500'
            "
          >
            EN
          </button></NuxtLink
        >
        <NuxtLink :to="switchLocalePath('th')">
          <button
            :class="
              $i18n.locale === 'th'
                ? 'pl-3 text-lg font-semibold text-blue-800'
                : 'pl-3 text-lg font-semibold text-gray-500'
            "
          >
            TH
          </button>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.activeLink {
  color: #1e3a8a;
  border-bottom: 2px solid #1e3a8a;
  font-weight: 700;
}
</style>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      activeMenu: this.$i18n.locale,
      menuLists: [
        { name: this.$t('home'), link: 'home' },
        { name: this.$t('service'), link: 'service' },
        { name: this.$t('about'), link: 'about' },
        { name: this.$t('portfolio'), link: 'portfolio' },
        { name: this.$t('blog'), link: 'blog' },
      ],
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>
