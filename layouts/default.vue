<template>
  <div>
    <div class="h-full w-full sticky top-0 p-2 z-20 bg-white">
      <Navigation />
    </div>
    <div class="z-0 min-h-screen">
      <Nuxt />
    </div>
    <div class="relative">
      <button
        v-show="showButton"
        class="rounded-full bg-indigo-800 fixed bottom-5 right-5 text-white hover:bg-indigo-500"
        :class="showButton ? 'animate__animated animate__slideInUp animate__slow': ''"
        @click="onScrollToTop"
      >
        <IconChevronUp class="h-16 w-16" />
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

    console.log(this.$i18n.locale);
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
