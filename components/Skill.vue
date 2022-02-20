<template>
  <div class="flex space-x-10 p-5 animate__animated animate__slideInUp animate__slow">
    <div class="flex flex-col space-y-5 w-full basis-full md:basis-2/3">
      <div class="bg-indigo-100 rounded-xl">
        <div class="flex space-x-2 text-xl bg-indigo-700 p-5 text-white rounded-t-xl">
          <IconTranslate />
          <div>
            {{ $t('skillAndFramework.programmingLanguage') }}
          </div>
        </div>
        <div class="text-indigo-500 font-normal">
          <ul class="list-disc px-8 p-2">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      <div class="bg-indigo-100 rounded-xl">
        <div class="flex space-x-2 text-xl bg-indigo-700 p-5 text-white rounded-t-xl">
          <IconTool />
          <div>
            {{ $t('skillAndFramework.frameworkAndLibrary') }}
          </div>
        </div>

        <div class="text-indigo-500 font-normal">
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
      <div class="bg-indigo-100 rounded-xl">
        <div class="flex space-x-2 text-xl bg-indigo-700 p-5 text-white rounded-t-xl">
          <IconExtra class="mt-1" />
          <div>
            {{ $t('skillAndFramework.miscellaneuous') }}
          </div>
        </div>
        <div class="text-indigo-500">
          <ul class="list-disc px-8 p-2 font-normal">
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
    <div class="hidden h-screen sticky top-0 md:flex items-center justify-center basis-1/3">
      <div class="text-indigo-600 text-5xl flex justify-center items-center">
        <div class="mr-4">
          <IconSkill class="h-16 w-16" />
        </div>
        <div class="text-center">
          {{ $t('skillAndFramework.title') }}
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
