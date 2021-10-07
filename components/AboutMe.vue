<template>
  <div class="h-screen w-full flex items-center p-none md:p-5">
    <div class="bg-indigo-100 rounded-xl w-full p-5 md:p-10 animate__animated animate__slideInLeft animate__slow">
      <div class="grid grid-cols-3 gap-5 place-items-center">
        <div class="col-span-3 md:col-span-1">
          <img src="~/assets/images/me.jpg" class="rounded-full max-w-sm w-full mt-12 md:mt-0">
        </div>
        <div class="col-span-3 md:col-span-2 text-indigo-700">
          <div class="text-3xl font-bold text-center md:text-left">
            Roby Hartono
          </div>
          <div class="text-lg font-bold text-center md:text-left mt-4">
            Web | Frontend | Backend Developer
          </div>
          <div class="text-justify mt-4">
            Hi! My name is Roby Hartono, a web developer focused on crafting great experiences.
            Designing and Coding has been my passion since the day I started working on web developments.
            I enjoy crafting beautifully designed, intuitive and secure web applications. For over past 3 years,
            I have worked on some web and digitalization projects. And, I hope I could do the same with you as well.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutMe',
  data () {
    return {};
  },
  mounted () {

  }
});
</script>

<style scoped>
</style>
