<template>
  <div class="flex flex-col py-20 px-32 space-y-20">
    <div class="flex w-full justify-center">
      <h1 class="text-4xl font-semibold">Blog</h1>
    </div>
    <div class="grid grid-cols-12 gap-x-20">
      <div
        v-for="item in blogLists"
        class="col-span-4 transform hover:scale-110 duration-300 cursor-pointer"
      >
        <img class="w-full" :src="item.image" alt="blog" />
        <div
          class="flex flex-col bg-white p-5 rounded-b-lg border border-gray-200"
        >
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <h5>{{ item.description }}</h5>
          <div class="flex mt-2 items-center">
            <p class="text-sm text-gray-400 text-opacity-80">
              {{ item.date }}
            </p>
            <span
              class="text-sm text-semibold rounded-xl bg-purple-200 px-3 py-1 text-blue-900 ml-auto"
              >{{ item.category }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="border border-blue-900 text-blue-900 bg-white px-16 py-3 rounded-xl text-xl hover:border-0 hover:text-white hover:bg-blue-900"
      >
        See all
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogLists: [
        {
          image: '/blog-1.svg',
          name: 'Best Digital Marketing Stats We’veSeen This Week  ',
          description:
            'Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
          data: 'April 22, 2021',
          category: 'Web Development',
        },
        {
          image: '/blog-2.svg',
          name: 'A Marketer’s Guide to Price Comparison Websites',
          description:
            'Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
          data: 'April 22, 2021',
          category: 'Robotic',
        },
        {
          image: '/blog-3.svg',
          name: 'A Marketer’s Guide to Price Comparison Websites',
          description:
            'Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
          data: 'April 22, 2021',
          category: 'Mobile Application',
        },
      ],
    }
  },
}
</script>
