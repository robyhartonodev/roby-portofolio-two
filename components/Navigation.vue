<template>
  <div class="h-screen w-full">
    <div class="grid grid-cols-1 justify-items-center h-full">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.name"
        class="font-sans cursor-pointer text-white font-bold w-full h-full flex items-center justify-center rounded-r-3xl hover-navigation-item"
        :class="[item.color, {active: selectedNavigationItem === item.name}]"
        :to="item.to"
        @click.native="onNavigationItemClick(item.name)"
      >
        <div class="grid justify-items-center">
          <div class="mb-4">
            <IconMe v-if="item.name === 'AboutMe'" />
            <IconEducation v-if="item.name === 'Education'" />
            <IconSkill v-if="item.name === 'Skills'" />
            <IconProject v-if="item.name === 'Projects'" />
            <IconContact v-if="item.name === 'ContactMe'" />
          </div>
          <div>
            {{ item.label }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      navigationItems: [
        { name: 'AboutMe', label: 'About Me', color: 'bg-indigo-900 hover:bg-indigo-200', to: '/' },
        { name: 'Education', label: 'Educations and Experiences', color: 'bg-indigo-800 hover:bg-indigo-200', to: '/education' },
        { name: 'Skills', label: 'Skills and Frameworks', color: 'bg-indigo-700 hover:bg-indigo-200', to: '/skill' },
        { name: 'Projects', label: 'My Projects', color: 'bg-indigo-600 hover:bg-indigo-200', to: '/myproject' },
        { name: 'ContactMe', label: 'Contact Me', color: 'bg-indigo-500 hover:bg-indigo-200', to: '/contactme' }
      ],
      selectedNavigationItem: 'AboutMe'
    };
  },
  mounted () {

  },
  methods: {
    onNavigationItemClick (name: string) {
      this.selectedNavigationItem = name;
      console.log(name);
    }
  }
});
</script>

<style scoped>
  .hover-navigation-item {
    @apply transition transform duration-700 ease-in-out hover:text-indigo-50 md:hover:-translate-x-16;
  }
  .active {
    @apply bg-indigo-200;
  }
</style>
