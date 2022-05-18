<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path :fill="colors" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,106.7C384,128,480,192,576,181.3C672,171,768,85,864,85.3C960,85,1056,171,1152,186.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WaveFour',
  computed: {
    colors () {
      return this.$store.state.isDarkMode ? '#6366F1' : '#e0e7ff';
    }
  }
});
</script>
