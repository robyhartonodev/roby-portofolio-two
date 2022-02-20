<template>
  <div class="flex flex-col p-5 animate__animated animate__slideInUp animate__slow space-y-5">
    <div class="flex items-center justify-center text-5xl">
      <div>
        <IconContact class="w-16 h-16" />
      </div>
      <span class="ml-4">{{ $t('contactMe.title') }}</span>
    </div>
    <div class="bg-indigo-100 rounded p-5">
      <div
        v-if="statusValue.length > 0"
        class="block bg-indigo-700 text-white text-2xl my-3 p-3 rounded-2xl animate__animated animate__slideInRight animate__slow w-full"
      >
        {{ statusValue }}
      </div>

      <div class="text-indigo-700">
        {{ $t('contactMe.labelEmail') }}
      </div>
      <input
        v-model="emailValue"
        type="email"
        name="email"
        class="mt-1
              block
              w-full
              rounded-md
              bg-indigo-50
              border-transparent
              placeholder-indigo-400
              focus:border-indigo-500
              focus:bg-white focus:ring-0"
        :placeholder="$t('contactMe.placeholderEmail')"
        :disabled="isBusy"
      >
      <div class="text-indigo-700 mt-3">
        {{ $t('contactMe.labelMessage') }}
      </div>
      <textarea
        v-model="messageValue"
        name="message"
        rows="8"
        class="mt-1
            block
            w-full
            rounded-md
            bg-indigo-50
            border-transparent
            placeholder-indigo-400
            focus:border-indigo-500
            focus:bg-white focus:ring-0"
        :placeholder="$t('contactMe.placeholderMessage')"
        :disabled="isBusy"
      />
      <button id="my-form-button" class="bg-indigo-800 text-white rounded p-3 mt-3" @click="submitForm">
        {{ $t('submit') }}
      </button>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactMe',
  data () {
    return {
      isBusy: false,
      emailValue: '',
      messageValue: '',
      statusValue: '',
      placeholderMessage: 'Hi Roby! \n \nI would like to talk with you.... \n \nThanks and regards, \n \nMax Mustermann'
    };
  },
  mounted () {
  },
  methods: {
    submitForm () {
      this.isBusy = true;
      this.statusValue = '';

      if (this.messageValue.length > 0 || this.emailValue.length > 0) {
        fetch('https://formspree.io/f/mzbybowg', {
          method: 'POST',
          body: JSON.stringify({
            email: this.emailValue,
            message: this.messageValue
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            this.statusValue = <string> this.$t('contactMe.submitSuccess');
            this.messageValue = '';
            this.emailValue = '';
          })
          .catch(() => {
            this.statusValue = <string> this.$t('contactMe.submitFailed');
          })
          .finally(() => {
            this.isBusy = false;
          });
      } else {
        this.statusValue = <string> this.$t('contactMe.emailValidation');
        this.isBusy = false;
      }
    }
  }
});
</script>

<style scoped>

</style>
