<template>
  <div class="flex flex-col px-12 py-20 lg:flex-row lg:px-32 lg:py-40">
    <div class="justify-center flex-1 hidden lg:flex">
      <img src="/about.svg" alt="about" />
    </div>
    <div class="flex flex-col items-center flex-1 space-y-10 lg:items-start">
      <h1 class="text-4xl font-semibold">{{ $t('about') }}</h1>
      <p class="text-center lg:text-left">
        {{ $t('aboutDescription') }}
      </p>
      <img class="w-full lg:w-4/6" src="/programming.svg" alt="programming" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
