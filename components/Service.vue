<template>
  <div class="flex flex-col py-20 px-32 space-y-20">
    <div class="flex w-full justify-center">
      <h1 class="text-4xl font-semibold">Our Service</h1>
    </div>
    <div class="flex justify-start">
      <div
        v-for="item in serviceLists"
        class="flex flex-col flex-1 space-y-5 items-center"
      >
        <img class="w-min" :src="item.image" :alt="item.name" />
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <div class="flex flex-col items-center">
          <p>{{ item.des1 }}</p>
          <p>{{ item.des2 }}</p>
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
          name: 'UI/UX',
          des1: 'We use specific tools for designing',
          des2: 'such as Figma and Adobe XD',
        },
        {
          image: '/web.svg',
          name: 'Web Development',
          des1: 'We use new technologies to build a website.',
          des2: 'such as React, VueJS, Laravel NodeJS and Golang',
        },
        {
          image: '/app.svg',
          name: 'Mobile Application',
          des1: 'We use high performance tools',
          des2: 'such as Flutter and React Native',
        },

        {
          image: '/blockchain.svg',
          name: 'Blockchain',
          des1: 'We provide blockchain technologies',
          des2: 'such as Solidity and Web3',
        },
      ],
    }
  },
}
</script>
