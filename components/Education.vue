<template>
  <div class="flex p-5 animate__animated animate__slideInUp animate__slow space-x-0 md:space-x-10">
    <div class="hidden h-screen sticky top-0 md:flex items-center justify-center basis-1/3">
      <div class="text-indigo-700 dark:text-indigo-300 text-5xl flex flex-col justify-center items-center">
        <div>
          <IconEducation class="h-16 w-16" />
        </div>
        <div class="text-center">
          {{ $t('educationAndExperience.title') }}
        </div>
      </div>
    </div>
    <div class="flex flex-col basis-full md:basis-2/3 space-y-5">
      <div class="text-6xl font-bold mb-4 text-indigo-400">
        2016
      </div>
      <div v-for="item in data2016" :key="item.title">
        <div class="text-sm font-bold text-indigo-300">
          {{ item.span }}
        </div>
        <div class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
          {{ item.title }}
        </div>
        <div class="text-lg text-indigo-700 dark:text-indigo-300 font-normal text-justify">
          {{ item.description }}
        </div>
      </div>
      <div class="text-6xl font-bold mb-4 text-indigo-400">
        2019
      </div>
      <div v-for="item in data2019" :key="item.title">
        <div class="text-sm font-bold text-indigo-300">
          {{ item.span }}
        </div>
        <div class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
          {{ item.title }}
        </div>
        <div class="text-lg text-indigo-700 dark:text-indigo-300 font-normal text-justify">
          {{ item.description }}
        </div>
      </div>
      <div class="text-6xl font-bold mb-4 text-indigo-400">
        2020
      </div>
      <div v-for="item in data2020" :key="item.title">
        <div class="text-sm font-bold text-indigo-300">
          {{ item.span }}
        </div>
        <div class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
          {{ item.title }}
        </div>
        <div class="text-lg text-indigo-700 dark:text-indigo-300 font-normal text-justify">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Education',
  data () {
    return {
      data2016: [
        {
          span: '2016-2020',
          title: this.$t('educationAndExperience.entryOne.title'),
          description: this.$t('educationAndExperience.entryOne.description')
        }
      ],
      data2019: [
        {
          span: '04.2019 - 04.2020',
          title: this.$t('educationAndExperience.entryTwo.title'),
          description: this.$t('educationAndExperience.entryTwo.description')
        }
      ],
      data2020: [
        {
          span: '2020 - NOW',
          title: this.$t('educationAndExperience.entryThree.title'),
          description: this.$t('educationAndExperience.entryThree.description')
        },
        {
          span: '06.2020-09.2020',
          title: this.$t('educationAndExperience.entryFour.title'),
          description: this.$t('educationAndExperience.entryFour.description')
        },
        {
          span: '06.2020 - NOW',
          title: this.$t('educationAndExperience.entryFive.title'),
          description: this.$t('educationAndExperience.entryFive.description')
        }
      ]
    };
  },
  mounted () {

  }
});
</script>
