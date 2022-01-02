<template>
  <div class="min-h-screen w-full p-none md:p-5 animate__animated animate__slideInDown animate__slow">
    <div class="p-5 grid grid-cols-1 gap-5 justify-items-center">
      <div class="bg-white w-full h-full rounded-xl">
        <div class="flex space-x-2 text-xl bg-indigo-700 p-5 text-white rounded-t-xl">
          <IconTranslate />
          <div>
            Programmiersprachen
          </div>
        </div>
        <div class="text-indigo-700">
          <ul class="list-disc px-8 p-2">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      <div class="bg-white w-full rounded-xl">
        <div class="flex space-x-2 text-xl bg-indigo-700 p-5 text-white rounded-t-xl">
          <IconTool />
          <div>
            Frameworks and Libraries
          </div>
        </div>

        <div class="text-indigo-700">
          <ul class="list-disc px-8 p-2">
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Ionic</li>
            <li>Vue</li>
            <li>Laravel</li>
            <li>Spring Boot</li>
            <li>Quasar</li>
          </ul>
        </div>
      </div>
      <div class="bg-white w-full rounded-xl">
        <div class="flex space-x-2 text-xl bg-indigo-700 p-5 text-white rounded-t-xl">
          <IconExtra class="mt-1" />
          <div>
            Miscellaneous
          </div>
        </div>
        <div class="text-indigo-700">
          <ul class="list-disc px-8 p-2">
            <li>MVC-Pattern</li>
            <li>Unit Testing (Jest, PHPUnit)</li>
            <li>Git</li>
            <li>GitLab</li>
            <li>Material design</li>
            <li>REST-API</li>
            <li>Responsives Design</li>
            <li>Docker</li>
            <li>Agile (SCRUM)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Skill',
  data () {
    return {
    };
  },
  mounted () {

  }
});
</script>

<style scoped>
</style>
