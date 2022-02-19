<template>
  <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-3 text-indigo-600 font-bold text-center items-center justify-between">
    <div class="p-5 flex flex-row items-center space-x-3">
      <div class="rounded-full bg-indigo-100 p-3 text-3xl">
        <span class="text-indigo-800">
          R
        </span>
        <span class="text-indigo-600">
          H
        </span>
      </div>
      <div class="hidden md:flex md:flex-wrap justify-center">
        <a
          v-for="item in navigationItems"
          :key="item.name"
          class="font-sans cursor-pointer text-indigo-600 font-bold items-center justify-center p-3 on-hover"
          :href="`#${item.id}`"
          @click="onNavigationItemClick(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center space-x-0 md:space-x-3">
      <div
        class="cursor-pointer on-hover p-2"
        @click="switchDarkMode"
      >
        <IconMoon
          v-if="isDarkMode"
          class="h-8 w-8"
        />
        <IconSun
          v-if="!isDarkMode"
          class="h-8 w-8"
        />
      </div>
      <div
        class="cursor-pointer on-hover p-2"
        @click="switchLanguage"
      >
        <span
          v-if="$i18n.locale === 'en'"
          @click="$i18n.setLocale('en')"
        >
          DE
        </span>
        <span
          v-if="$i18n.locale === 'de'"
          @click="$i18n.setLocale('de')"
        >
          EN
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      navigationItems: [
        { name: 'AboutMe', label: 'About me', color: 'bg-indigo-900 hover:bg-indigo-200', to: '/', id: 'aboutme' },
        { name: 'Education', label: 'Education and Experience', color: 'bg-indigo-800 hover:bg-indigo-200', to: '/education', id: 'education' },
        { name: 'Skills', label: 'Skill and Framework', color: 'bg-indigo-700 hover:bg-indigo-200', to: '/skill', id: 'skill' },
        { name: 'Projects', label: 'Project', color: 'bg-indigo-600 hover:bg-indigo-200', to: '/project', id: 'project' },
        { name: 'ContactMe', label: 'Contact me', color: 'bg-indigo-500 hover:bg-indigo-200', to: '/contactme', id: 'contactme' }
      ],
      selectedNavigationItem: 'AboutMe',
      themeMode: 'dark',
      currentLanguage: 'de'
    };
  },
  computed: {
    isDarkMode () {
      return this.$store.state.isDarkMode;
    }
  },
  mounted () {

  },
  methods: {
    onNavigationItemClick (link:string) {
      const id = `#${link}`;
      const yOffset = -120;
      const element = document.getElementById(id);

      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    },
    getActiveClass (name: string) {
      return (this.selectedNavigationItem === name) ? 'active' : '';
    },
    ...mapMutations({
      switchDarkMode: 'switchDarkMode'
    })
  }
});
</script>

<style scoped>
  .on-hover {
    @apply hover:bg-indigo-200 hover:rounded-lg;
  }
</style>
