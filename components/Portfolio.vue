<template>
  <div class="flex flex-col px-12 py-20 space-y-20 lg:px-32 bg-portfolio">
    <div class="flex justify-center w-full">
      <h1 class="text-4xl font-semibold text-white">{{ $t('ourPortfolio') }}</h1>
    </div>
    <div
      class="grid grid-cols-3 lg:grid-cols-12 lg:gap-x-20 gap-y-10 lg:gap-y-0"
    >
      <div v-for="item in projectLists" :key="item.name" class="col-span-3">
        <div
          class="flex flex-col duration-300 transform rounded cursor-pointer hover:scale-110 hover:shadow-md"
        >
          <img :src="item.image" alt="item.name" />
          <div class="flex flex-col p-5 bg-white rounded-b-lg">
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <h5>{{ item.description }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-portfolio {
  background-image: url('/portfolio.svg');
  background-size: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      projectLists: [
        {
          image: '/project-1.svg',
          name: 'Project 1',
          description: 'Mobile Application',
        },
        {
          image: '/project-2.svg',
          name: 'Project 2',
          description: 'AI Robotic',
        },
        {
          image: '/project-3.svg',
          name: 'Project 3',
          description: 'Smart IOT',
        },
        {
          image: '/project-4.svg',
          name: 'Project 4',
          description: 'VR/AR',
        },
      ],
    }
  },
}
</script>
