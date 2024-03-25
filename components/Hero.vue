<template>
  <div
    class="flex px-12 pb-20 lg:px-32 pt-36 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-400"
  >
    <div class="flex flex-col items-center flex-1 my-auto space-y-12 lg:items-start" data-aos="fade-right" data-aos-delay="100">
        <h1 class="text-4xl font-semibold text-center text-white lg:text-left">
          {{ $t('heroTitle') }}
        </h1>
      
        <h3 class="text-xl text-center text-white lg:text-left">
          {{ $t('heroDescription') }}
        </h3>
      
        <button
          v-scroll-to="'#portfolio'"
          class="px-8 py-1 text-xl text-white border border-white rounded w-max hover:border-blue-900 hover:shadow-md hover:bg-white hover:text-blue-900"
        >
          {{ $t('viewPortfolioButton') }}
        </button>
    </div>
    <div class="justify-end flex-1 hidden lg:flex">
      <div data-aos="fade-up" data-aos-delay="100">
        <img class="w-4/6 mr-10" src="/hero.svg" alt="hero" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
