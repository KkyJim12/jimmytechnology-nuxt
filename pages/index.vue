<template>
  <main>
    <Navbar />
    <div v-scroll-spy>
      <Hero id="home" />
      <Service id="service" />
      <About id="about" />
      <Portfolio id="portfolio" /> 
      <Blog id="blog" />
      <Contact id="contact" />
    </div>
    <Footer />
  </main>
</template>

<style>
body {
  font-family: 'Nunito', sans-serif;
}
</style>

<script>
export default {}
</script>
