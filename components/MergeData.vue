<template>
  <div class="flex flex-col text-indigo-600 font-bold">
    <AboutMe id="aboutme" class="scroll-mt-24" />
    <WaveOne />
    <Education id="education" class="scroll-mt-24 scroll-mb-24" />
    <WaveTwo />
    <Skill id="skill" class="scroll-mt-24 scroll-mb-24" />
    <WaveThree />
    <Project id="project" class="scroll-mt-32 scroll-mb-24" />
    <WaveFour />
    <ContactMe id="contactme" class="-scroll-mb-4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MergeData',
  data () {
    return {

    };
  },
  mounted () {

  },
  methods: {
  }
});
</script>
