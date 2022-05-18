<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path :fill="colors" fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,202.7C384,213,480,267,576,256C672,245,768,171,864,154.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WaveThree',
  computed: {
    colors () {
      return this.$store.state.isDarkMode ? '#6366F1' : '#e0e7ff';
    }
  }
});
</script>
