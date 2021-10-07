<template>
  <div class="flex">
    <div class="h-screen sticky top-0 w-0 md:w-1/4 invisible md:visible bg-indigo-50">
      <Navigation />
    </div>
    <div class="flex-1 bg-indigo-50">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
  data () {
    return {};
  },
  mounted () {

  }
});
</script>
