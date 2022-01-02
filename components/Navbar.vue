<template>
  <nav class="flex px-32 py-5 bg-white">
    <div class="flex items-center">
      <h1 class="text-xl font-semibold cursor-pointer">JimmyTechnology</h1>
    </div>
    <div class="mx-auto">
      <ul class="flex items-center space-x-8">
        <li
          @click="navigate(item.name)"
          :key="item.name"
          v-for="item in menuLists"
          :class="
            item.name === activeMenu
              ? 'text-lg font-semibold text-blue-900 border-b-2 border-blue-900 cursor-pointer'
              : 'text-lg font-semibold text-gray-600 hover:text-gray-700 cursor-pointer'
          "
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="flex items-center ml-auto">
      <div class="flex items-center mr-6">
        <button
          class="px-10 py-2 font-semibold text-white duration-300 transform bg-blue-900 rounded hover:scale-110"
        >
          Contact us
        </button>
      </div>
      <div class="flex items-center">
        <button
          @click="changeLanguage('EN')"
          :class="
            language === 'EN'
              ? 'pr-3 text-lg font-semibold text-gray-700 border-r-2 border-gray-500'
              : 'pr-3 text-lg font-semibold text-gray-500 border-r-2 border-gray-500'
          "
        >
          EN
        </button>
        <button
          @click="changeLanguage('TH')"
          :class="
            language === 'TH'
              ? 'pl-3 text-lg font-semibold text-gray-700'
              : 'pl-3 text-lg font-semibold text-gray-500'
          "
        >
          TH
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: 'Home',
      menuLists: [
        { name: 'Home' },
        { name: 'Service' },
        { name: 'About us' },
        { name: 'Portfolio' },
        { name: 'Blog' },
      ],
      language: 'EN',
    }
  },
  methods: {
    navigate(section) {
      this.activeMenu = section
    },
    changeLanguage(language) {
      this.language = language
    },
  },
}
</script>
