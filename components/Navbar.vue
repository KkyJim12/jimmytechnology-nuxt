<template>
  <nav class="flex px-32 py-5 bg-white fixed w-full z-40">
    <div class="flex items-center">
      <img
        v-scroll-to="'#home'"
        class="cursor-pointer w-60"
        src="/logo.svg"
        alt="logo"
      />
    </div>
    <div class="mx-auto">
      <ul
        v-scroll-spy-link
        v-scroll-spy-active="{
          class: 'activeLink',
        }"
        class="flex items-center space-x-8"
      >
        <li
          v-scroll-to="`#${item.link}`"
          :key="item.link"
          v-for="item in menuLists"
          class="text-lg font-semibold text-gray-600 hover:text-gray-700 cursor-pointer"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="flex items-center ml-auto">
      <div class="flex items-center mr-6">
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
  methods: {},
}
</script>
