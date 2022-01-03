<template>
  <div
    class="flex px-32 pb-20 pt-36 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-400"
  >
    <div class="flex flex-col flex-1 my-auto space-y-12">
      <h1 class="text-4xl font-semibold text-white">
        {{ $t('heroTitle') }}
      </h1>
      <h3 class="text-xl text-white">
        {{ $t('heroDescription') }}
      </h3>
      <button
        v-scroll-to="'#portfolio'"
        class="px-8 py-1 text-xl text-white border border-white rounded w-max hover:border-blue-900 hover:shadow-md hover:bg-white hover:text-blue-900"
      >
        {{ $t('viewPortfolioButton') }}
      </button>
    </div>
    <div class="flex justify-end flex-1">
      <img class="w-4/6 mr-10" src="/hero.svg" alt="hero" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
