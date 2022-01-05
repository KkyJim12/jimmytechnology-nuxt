<template>
  <div class="flex flex-col px-12 py-20 space-y-20 lg:px-32 bg-portfolio">
    <div class="flex justify-center w-full">
      <h1 class="text-4xl font-semibold text-white">
        {{ $t('ourPortfolio') }}
      </h1>
    </div>
    <div>
      <no-ssr>
        <carousel
          :margin="40"
          :responsive="{
            0: { items: 1, nav: true },
            600: { items: 4, nav: true },
          }"
        >
          <div v-for="item in projectLists" :key="item.name">
            <div class="flex flex-col rounded cursor-pointer">
              <img class="w-full" :src="item.image" alt="item.name" />
              <div class="flex flex-col p-5 bg-white rounded-b-lg">
                <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                <h5>{{ item.description }}</h5>
              </div>
            </div>
          </div>
        </carousel>
      </no-ssr>
    </div>
  </div>
</template>

<style scoped>
.bg-portfolio {
  background-image: url('/portfolio.svg');
  background-size: cover;
  background-repeat: no-repeat;
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
