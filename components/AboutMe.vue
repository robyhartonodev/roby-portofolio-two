<template>
  <div class="h-full w-full p-5">
    <div class="animate__animated animate__slideInUp animate__slow">
      <div class="flex flex-col items-center space-y-5">
        <div>
          <img src="~/assets/images/me-transparent.png" class="max-w-sm w-full mt-12 md:mt-0 rounded-full bg-indigo-50">
        </div>
        <div class="text-center text-5xl">
          <span class="text-indigo-800">
            Roby
          </span>
          <span class="text-indigo-600">
            Hartono
          </span>
        </div>
        <div class="text-xl md:text-3xl text-center text-indigo-600">
          Web // Frontend // Backend Developer
        </div>
        <div class="text-justify text-xl font-normal text-indigo-600">
          Hi! My name is Roby Hartono, a software developer focused on crafting great experiences.
          Designing and Coding has been my passion since the day I started working on web developments.
          I enjoy crafting beautifully designed, intuitive and secure web applications. For over past 3 years,
          I have worked on some web and digitalization projects.
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
