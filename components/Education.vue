<template>
  <div class="h-full w-full p-10 md:p-5">
    <div class="grid grid-cols-1 gap-y-5 animate__animated animate__slideInRight animate__slow">
      <div class="text-6xl font-bold mb-4 text-indigo-400">
        2016
      </div>
      <div v-for="item in data2016" :key="item.title">
        <div class="text-sm font-bold text-indigo-300">
          {{ item.span }}
        </div>
        <div class="text-2xl font-bold text-indigo-700">
          {{ item.title }}
        </div>
        <div class="text-lg text-indigo-700 text-justify">
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
        <div class="text-2xl font-bold text-indigo-700">
          {{ item.title }}
        </div>
        <div class="text-lg text-indigo-700 text-justify">
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
        <div class="text-2xl font-bold text-indigo-700">
          {{ item.title }}
        </div>
        <div class="text-lg text-indigo-700 text-justify">
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
          title: 'THM-Gießen - Medizinische Informatik - Bachelor of Science (B.Sc.)',
          description: 'Medical informatics supports and models healthcare processes with IT tools. This includes, for example, the development of hospital information and practice management systems or new diagnostic-therapeutic procedures. Medical informatics specialists are employed in hospitals, by physicians in private practice and in industry by software and hardware manufacturers.'
        }
      ],
      data2019: [
        {
          span: '04.2019 - 04.2020',
          title: 'BDH Klinik Braunfels - Intern Digitalization Project (VIKTOR)',
          description: 'Viktor (Virtual Intraclinic Appointment Organizer) is an application that supports and optimizes the workflows of the HUB staff in BDH Klinik Braunfels.'
        }
      ],
      data2020: [
        {
          span: '2020 - NOW',
          title: 'THM Gießen - Digitale Medizin - Master of Science (M.Sc.)',
          description: "The master's program in Digital Medicine focuses on the topics of modern medicine that are necessary for digitization in healthcare. It builds on a completed bachelor's or diploma degree in the healthcare sector. The master's degree then qualifies students to conduct scientific research and to take on strategic and management tasks in the field of digital medicine."
        },
        {
          span: '06.2020-09.2020',
          title: 'THM Gießen FB Gesundheit - Werkstudent Web Developer PILOS Project',
          description: 'PILOS (Platform for Interactive Live-Online Seminars) is an easy to use frontend for BigBlueButton developed at the TH Mittelhessen University of Applied Sciences (THM) Faculty of Health (FB GES). It is based on the experience of students, teachers and staff during the covid-19 pandemic, and the raised need for a modern and flexible video conferencing system for the use case of digital class rooms, group learning and other digital meetings. Here I worked with the group and learned some code quality stacks like ESLint, PHPCSfixer, etc. and testing techniques like unit testing with Mocha and Vue Test Utils and PHPUnit Test for feature and unit testing.'
        },
        {
          span: '06.2020 - NOW',
          title: 'BDH Klinik Braunfels - Werkstudent Digitalization project (VIKTOR)',
          description: 'Viktor (Virtual Intraclinic Appointment Organizer) is an application that supports and optimizes the workflows of the HUB staff in BDH Klinik Braunfels. This project is built on various frameworks like Vue, Quasar and Laravel.'
        }
      ]
    };
  },
  mounted () {

  }
});
</script>
