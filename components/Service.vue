<template>
  <div class="flex flex-col px-10 py-20 space-y-20 lg:px-32">
    <div class="flex justify-center w-full">
      <h1 class="text-4xl font-semibold">{{ $t('serviceTitle') }}</h1>
    </div>
    <div
      class="flex flex-col justify-start space-y-16 lg:flex-row lg:space-y-0"
    >
      <div
        v-for="item in serviceLists"
        class="flex flex-col items-center flex-1 space-y-5"
      >
        <img class="w-min" :src="item.image" :alt="item.name" />
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <div class="flex flex-col items-center text-center">
          <p>{{ item.description1 }}</p>
          <p>{{ item.description2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceLists: [
        {
          image: '/ui-ux.svg',
          name: this.$t('uiUx'),
          description1: this.$t('uiUxDescription1'),
          description2: this.$t('uiUxDescription2'),
        },
        {
          image: '/web.svg',
          name: this.$t('webDevelopment'),
          description1: this.$t('webDevelopmentDescription1'),
          description2: this.$t('webDevelopmentDescription2'),
        },
        {
          image: '/app.svg',
          name: this.$t('mobileApplication'),
          description1: this.$t('mobileApplicationDescription1'),
          description2: this.$t('mobileApplicationDescription2'),
        },

        {
          image: '/blockchain.svg',
          name: this.$t('blockchain'),
          description1: this.$t('blockchainDescription1'),
          description2: this.$t('blockchainDescription2'),
        },
      ],
    }
  },
}
</script>
