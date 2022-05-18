<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path :fill="colors" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,144C672,149,768,203,864,240C960,277,1056,299,1152,293.3C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WaveTwo',
  computed: {
    colors () {
      return this.$store.state.isDarkMode ? '#6366F1' : '#e0e7ff';
    }
  }
});
</script>
