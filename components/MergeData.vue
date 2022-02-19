<template>
  <div class="flex flex-col space-x-3 text-indigo-600 font-bold">
    <AboutMe id="aboutme" class="scroll-mt-24" />
    <Education id="education" class="scroll-mt-24 scroll-mb-24" />
    <Skill id="skill" class="scroll-mt-24 scroll-mb-24" />
    <Project id="project" class="scroll-mt-32 scroll-mb-24" />
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
