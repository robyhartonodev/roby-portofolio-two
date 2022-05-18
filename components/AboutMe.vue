<template>
  <div class="h-full w-full p-5 flex items-center min-h-screen">
    <div>
      <div class="flex flex-col md:flex-row items-center">
        <div class="basis-full md:basis-1/4 text-center mr-5">
          <img src="~/assets/images/me-transparent.png" class="max-w-sm w-full mt-12 md:mt-0 rounded-full bg-indigo-50">
        </div>
        <div class="basis-full md:basis-3/4">
          <div class="flex flex-col space-y-4">
            <div class="text-5xl text-center md:text-left">
              <span class="text-indigo-700 dark:text-indigo-300">
                Roby
              </span>
              <span class="text-indigo-500 dark:text-indigo-100 ">
                Hartono
              </span>
            </div>
            <div class="text-xl md:text-3xl text-indigo-700 dark:text-indigo-300">
              {{ $t('aboutMe.job') }}
            </div>
            <div class="text-justify text-xl font-normal text-indigo-700 dark:text-indigo-300">
              {{ $t('aboutMe.description') }}
            </div>
            <div class="flex">
              <button class="bg-indigo-500 rounded-lg p-3 text-white w-full md:w-1/4 hover:bg-indigo-200 hover:text-indigo-500 font-bold">
                Download CV
              </button>
            </div>
          </div>
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
