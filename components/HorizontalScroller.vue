<template>
  <div>
    <div class="bg-indigo-400 flex justify-center text-3xl text-white p-8">
      Title
    </div>
    <div class="relative w-full min-h-[8rem] p-5 bg-indigo-200 flex items-center">
      <button
        class="absolute inset-y-16s left-4 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"
        @click="onClickLeftArrow"
      >
        <IconChevronLeft />
      </button>
      <button
        class="absolute inset-y-16 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"
        @click="onClickRightArrow"
      >
        <IconChevronRight />
      </button>

      <div id="test" class="flex space-x-6 overflow-x-hidden">
        <div v-for="index in 30" :key="'test' + index">
          <div class="flex flex-col space-y-4 items-center justify-center p-8">
            <img src="~/assets/images/stack-logo/php-logo.svg" alt="logo" class="h-16 w-16">
            <div class="text-indigo-500 font-bold">
              Typescript
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
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  methods: {
    onClickLeftArrow () {
      const container = document.getElementById('test');

      if (container) {
        container.scrollBy({
          top: 0,
          left: -300,
          behavior: 'smooth'
        });
      }
    },
    onClickRightArrow () {
      const container = document.getElementById('test');

      if (container) {
        container.scrollBy({
          top: 0,
          left: 300,
          behavior: 'smooth'
        });
      }
    }
  }
});
</script>
