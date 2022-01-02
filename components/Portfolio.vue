<template>
  <div class="flex flex-col py-20 px-32 space-y-20 bg-portfolio">
    <div class="flex w-full justify-center">
      <h1 class="text-4xl text-white font-semibold">Portfolio</h1>
    </div>
    <div class="flex space-x-20">
      <div
        v-for="item in projectLists"
        :key="index"
        class="flex flex-col flex-1 rounded"
      >
        <img :src="item.image" alt="item.name" />
        <div class="flex flex-col bg-white p-5 rounded-b-lg">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <h5>{{ item.description }}</h5>
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
          image: '/project.svg',
          name: 'Project 1',
          description: 'Website Responsive',
        },
        {
          image: '/project.svg',
          name: 'Project 1',
          description: 'Website Responsive',
        },
        {
          image: '/project.svg',
          name: 'Project 1',
          description: 'Website Responsive',
        },
        {
          image: '/project.svg',
          name: 'Project 1',
          description: 'Website Responsive',
        },
      ],
    }
  },
}
</script>
