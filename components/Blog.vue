<template>
  <div class="flex flex-col px-12 py-20 space-y-20 lg:px-32">
    <div class="flex justify-center w-full">
      <h1 class="text-4xl font-semibold">{{ $t('blog') }}</h1>
    </div>
    <div
      class="grid grid-cols-4 lg:grid-cols-12 gap-x-0 lg:gap-x-20 gap-y-10 lg:gap-y-0"
    >
      <div
        v-for="item in blogLists"
        class="col-span-4 duration-300 transform cursor-pointer hover:scale-110"
      >
        <img class="w-full" :src="item.image" alt="blog" />
        <div
          class="flex flex-col p-5 bg-white border border-gray-200 rounded-b-lg"
        >
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <h5>{{ item.description }}</h5>
          <div class="flex items-center mt-2">
            <p class="text-sm text-gray-400 text-opacity-80">
              {{ item.date }}
            </p>
            <span
              class="px-3 py-1 ml-auto text-sm text-blue-900 bg-purple-200 text-semibold rounded-xl"
              >{{ item.category }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="px-16 py-3 text-xl text-blue-900 bg-white border border-blue-900 rounded-xl hover:border-0 hover:text-white hover:bg-blue-900"
      >
        {{ $t('seeAll') }}
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
