<template>
  <div class="flex flex-col px-12 py-20 bg-indigo-900 lg:px-32 lg:flex-row">
    <div
      class="flex flex-col items-start flex-1 order-last ml-0 space-y-12 lg:ml-40 lg:order-first"
    >
      <h1 class="mt-4 mt-20 mb-10 text-4xl text-white lg:mt-0 text-semibold">
        {{ $t('contactButton') }}
      </h1>
      <div v-for="item in contactLists" class="flex flex-col">
        <div class="flex space-x-5">
          <img :src="item.image" alt="email" />
          <div class="flex flex-col">
            <h5 class="text-white text-semibold">{{ item.name }}</h5>
            <p class="text-white">{{ item.detail }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center w-full pt-12 ml-0 space-x-2 lg:ml-16 lg:justify-start"
      >
        <div v-for="item in socialLists">
          <img
            class="duration-300 transform cursor-pointer hover:scale-110"
            :src="item.image"
            :alt="item.name"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center flex-1">
      <div
        class="flex flex-col w-full p-10 space-y-8 bg-white lg:w-4/6 rounded-2xl"
      >
        <div class="flex flex-col space-y-2">
          <label class="text-xl font-semibold">{{ $t('name') }}</label>
          <input
            class="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-900"
            type="text"
            placeholder="John Smith"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label class="text-xl font-semibold">{{ $t('email') }}</label>
          <input
            class="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-900"
            type="text"
            placeholder="example@mail.com"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label class="text-xl font-semibold">{{ $t('message') }}</label>
          <textarea
            class="h-40 px-4 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-900"
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          <button
            class="flex justify-center w-full py-2 text-white transform bg-blue-900 border rounded-lg hover:text-blue-900 hover:bg-white hover:border-blue-900"
          >
            {{ $t('send') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactLists: [
        {
          image: '/email.svg',
          name: this.$t('email'),
          detail: 'jirakarnjim1@gmail.com',
        },
        {
          image: '/phone.svg',
          name: this.$t('phone'),
          detail: '065-8528414',
        },
        {
          image: '/pin.svg',
          name: this.$t('address'),
          detail: this.$t('addressDetail'),
        },
      ],
      socialLists: [
        { image: '/facebook.svg', name: 'facebook' },
        { image: '/instagram.svg', name: 'instagram' },
        { image: '/twitter.svg', name: 'twitter' },
        { image: '/youtube.svg', name: 'youtube' },
        { image: '/linkedin.svg', name: 'linkedin' },
      ],
    }
  },
}
</script>
