<template>
  <div class="flex py-20 px-32 bg-indigo-900">
    <div class="flex flex-col space-y-12 flex-1 ml-40">
      <h1 class="text-white text-4xl text-semibold mb-10 mt-4">
        Let's work together
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
      <div class="flex space-x-2 ml-16 pt-12">
        <div v-for="item in socialLists">
          <img
            class="cursor-pointer transform hover:scale-110 duration-300"
            :src="item.image"
            :alt="item.name"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-1 justify-center">
      <div class="flex flex-col bg-white rounded-2xl p-10 w-4/6 space-y-8">
        <div class="flex flex-col space-y-2">
          <label class="text-xl font-semibold">Name</label>
          <input
            class="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none"
            type="text"
            placeholder="John Smith"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label class="text-xl font-semibold">Email</label>
          <input
            class="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none"
            type="text"
            placeholder="example@mail.com"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label class="text-xl font-semibold">Message</label>
          <textarea
            class="border border-gray-200 rounded-lg px-4 py-2 resize-none h-40 focus:outline-none"
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          <button
            class="bg-blue-900 rounded-lg text-white flex justify-center w-full py-2 transform hover:text-blue-900 hover:bg-white border hover:border-blue-900"
          >
            Send
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
          name: 'Email',
          detail: 'jirakarnjim1@gmail.com',
        },
        {
          image: '/phone.svg',
          name: 'Phone',
          detail: '0658528414',
        },
        {
          image: '/pin.svg',
          name: 'Address',
          detail: '1655/149 Makkasan Ratchathewi Bangkok 10400',
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
