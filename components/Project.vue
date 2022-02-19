<template>
  <div class="mt-8">
    <div class="flex items-center justify-center text-5xl">
      <div>
        <IconProject class="w-16 h-16" />
      </div>
      <span class="ml-4">Projects</span>
    </div>

    <div class="grid grid-cols-3 gap-8 p-5">
      <div
        v-for="project in myProjects"
        :key="project.title"
        class="h-full bg-indigo-100 rounded-lg"
      >
        <div
          class="w-full cursor-pointer border-b-2 border-indigo-500"
          @click="redirectToLink(project.link)"
        >
          <img :src="require(`~/assets/images/${project.image}`)" class="rounded-t-lg h-72 w-full">
        </div>
        <div class="text-indigo-600 font-bold text-3xl p-5 flex flex-row items-center">
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
          title: 'VIKTOR',
          description: 'VIKTOR (Virtuelle Intraklinik Termin Organisator) is a customized enterprise software designed specifically to digitize the workflow of specific departments (Patient transports) in hospitals.',
          image: 'bdh.jpg',
          link: 'https://www.mittelhessen.de/lokales/wetzlar/braunfels/ideen-fur-den-hol-und-bringdienst_20743306',
          githubLink: null
        },
        {
          title: 'PILOS',
          description: 'PILOS is an easy-to-use open source front-end for BigBlueButton servers with a built-in load balancer.',
          image: 'pilos.svg',
          link: 'https://pilos.thm.de/',
          githubLink: 'https://github.com/THM-Health/PILOS'
        },
        {
          title: 'Wildling',
          description: 'This project demonstrates the ability to programmatically implement the user interface designed by a professional designer.',
          image: 'wildling.png',
          link: 'https://wildling-landing-page.vercel.app/',
          githubLink: 'https://github.com/robyhartonodev/wildling-landing-page'
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
