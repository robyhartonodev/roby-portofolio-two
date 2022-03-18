
<template>
  <div>
    <div class="h-full w-full sticky top-0 z-20 bg-white dark:bg-slate-900 drop-shadow-md">
      <Navigation />
    </div>

    <div class="z-0 min-h-screen">
      <Nuxt class="bg-white dark:bg-slate-900" />
    </div>
    <div class="relative">
      <button
        v-show="showButton"
        class="rounded-full bg-indigo-700 fixed bottom-5 right-5 text-white hover:bg-indigo-500"
        :class="showButton ? 'animate__animated animate__slideInUp animate__slow': ''"
        @click="onScrollToTop"
      >
        <IconChevronUp class="h-12 w-12" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
  data () {
    return {
      windowTop: window.scrollY,
      showButton: false
    };
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll, true);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll, true);
  },
  methods: {
    debounce (func: Function, timeout = 500) {
      let timer: NodeJS.Timeout;
      return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    },
    onScrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onScroll () {
      this.windowTop = window.scrollY;

      if (this.windowTop > 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    }
  }
});
</script>
