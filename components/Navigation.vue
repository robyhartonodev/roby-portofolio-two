<template>
  <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-3 text-indigo-600 font-bold text-center items-center justify-between border-b-2 border-indigo-500">
    <div class="p-5 flex flex-row items-center space-x-3">
      <div class="rounded-full p-3 text-3xl">
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
    <!-- Dark mode switcher -->
    <div class="flex flex-col md:flex-row items-center space-x-0 md:space-x-3">
      <div
        class="cursor-pointer on-hover p-2"
        @click="switchDarkMode"
      >
        <IconMoon
          v-if="!isDarkMode"
          class="h-8 w-8"
        />
        <IconSun
          v-if="isDarkMode"
          class="h-8 w-8"
        />
      </div>
      <!-- Language switcher -->
      <div
        class="on-hover p-2"
      >
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          class="cursor-pointer"
          :to="switchLocalePath('de')"
        >
          DE
        </nuxt-link>
        <nuxt-link
          v-if="$i18n.locale === 'de'"
          class="cursor-pointer"
          :to="switchLocalePath('en')"
        >
          EN
        </nuxt-link>
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
        { name: 'AboutMe', label: this.$t('aboutMe.title'), color: 'bg-indigo-900 hover:bg-indigo-200', id: 'aboutme' },
        { name: 'Education', label: this.$t('educationAndExperience.title'), color: 'bg-indigo-800 hover:bg-indigo-200', id: 'education' },
        { name: 'Skills', label: this.$t('skillAndFramework.title'), color: 'bg-indigo-700 hover:bg-indigo-200', id: 'skill' },
        { name: 'Projects', label: this.$t('project.title'), color: 'bg-indigo-600 hover:bg-indigo-200', id: 'project' },
        { name: 'ContactMe', label: this.$t('contactMe.title'), color: 'bg-indigo-500 hover:bg-indigo-200', id: 'contactme' }
      ],
      themeMode: 'dark'
    };
  },
  computed: {
    isDarkMode () {
      return this.$store.state.isDarkMode;
    }
  },
  watch: {
    '$route' () {
      this.navigationItems = [
        { name: 'AboutMe', label: this.$t('aboutMe.title'), color: 'bg-indigo-900 hover:bg-indigo-200', id: 'aboutme' },
        { name: 'Education', label: this.$t('educationAndExperience.title'), color: 'bg-indigo-800 hover:bg-indigo-200', id: 'education' },
        { name: 'Skills', label: this.$t('skillAndFramework.title'), color: 'bg-indigo-700 hover:bg-indigo-200', id: 'skill' },
        { name: 'Projects', label: this.$t('project.title'), color: 'bg-indigo-600 hover:bg-indigo-200', id: 'project' },
        { name: 'ContactMe', label: this.$t('contactMe.title'), color: 'bg-indigo-500 hover:bg-indigo-200', id: 'contactme' }
      ];
    }
  },
  mounted () {},
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
    transKey (key: string) {
      return this.$t(key);
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
