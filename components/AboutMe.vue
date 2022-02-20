<template>
  <div class="h-full w-full p-5">
    <div class="animate__animated animate__slideInUp animate__slow">
      <div class="flex flex-col items-center space-y-5">
        <div>
          <img src="~/assets/images/me-transparent.png" class="max-w-sm w-full mt-12 md:mt-0 rounded-full bg-indigo-50">
        </div>
        <div class="text-center text-5xl">
          <span class="text-indigo-700 dark:text-indigo-300">
            Roby
          </span>
          <span class="text-indigo-500 dark:text-indigo-100 ">
            Hartono
          </span>
        </div>
        <div class="text-xl md:text-3xl text-center text-indigo-700 dark:text-indigo-300">
          {{ $t('aboutMe.job') }}
        </div>
        <div class="text-justify text-xl font-normal text-indigo-700 dark:text-indigo-300">
          {{ $t('aboutMe.description') }}
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
