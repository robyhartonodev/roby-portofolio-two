<template>
  <div class="min-h-screen flex flex-col items-center bg-indigo-100 dark:bg-indigo-500 p-5">
    <div class="flex flex-col items-center justify-center text-5xl text-indigo-700 dark:text-indigo-300">
      <div>
        <IconProject class="w-16 h-16" />
      </div>
      <span>
        {{ $t('project.title') }}
      </span>
    </div>

    <div class="grid grid-cols-3 gap-4 p-5">
      <div
        v-for="project in myProjects"
        :key="project.title"
        class="h-full bg-indigo-200 rounded-lg col-span-4 md:col-span-1"
      >
        <div
          class="w-full cursor-pointer border-b-2 border-indigo-500"
          @click="redirectToLink(project.link)"
        >
          <img :src="require(`~/assets/images/${project.image}`)" class="rounded-t-lg h-72 w-full p-2">
        </div>
        <div class="font-bold text-3xl p-5 flex flex-row items-center">
          <div class="mr-2">
            {{ project.title }}
          </div>
          <div
            v-if="project.githubLink"
            class="cursor-pointer"
            @click="redirectToLink(project.githubLink)"
          >
            <IconGithub />
          </div>
        </div>
        <div class="text-justify text-indigo-600 p-5 font-normal">
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Project',
  data () {
    return {
      myProjects: [
        {
          title: this.$t('project.entryOne.title'),
          description: this.$t('project.entryOne.description'),
          image: 'bdh.jpg',
          link: 'https://www.mittelhessen.de/lokales/wetzlar/braunfels/ideen-fur-den-hol-und-bringdienst_20743306',
          githubLink: null
        },
        {
          title: this.$t('project.entryTwo.title'),
          description: this.$t('project.entryTwo.description'),
          image: 'pilos.svg',
          link: 'https://pilos.thm.de/',
          githubLink: 'https://github.com/THM-Health/PILOS'
        },
        {
          title: this.$t('project.entryFour.title'),
          description: this.$t('project.entryFour.description'),
          image: 'fajour.svg',
          link: 'https://play.google.com/store/apps/details?id=com.fajour.app',
          githubLink: 'https://github.com/robyhartonodev/fajour'
        },
        {
          title: this.$t('project.entryFive.title'),
          description: this.$t('project.entryFive.description'),
          image: 'pepegram.svg',
          link: 'https://pepegram-f8405.web.app/',
          githubLink: 'https://github.com/robyhartonodev/pepegram-vue'
        }
      ]
    };
  },
  mounted () {

  },
  methods: {
    redirectToLink (link:string) {
      window.open(link, '_blank');
    }
  }
});
</script>
