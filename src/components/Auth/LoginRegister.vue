<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md" v-if="formState === 'signUp'">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ tab | titleCase }} to access your photos.
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        class="col"
        ref="email"
        outlined
        v-model="formData.email"
        label="E-mail"
        stack-label
        :dense="dense"
        :rules="[
          val => !!val || '* Required',
          val => isValidEmailAddress(val) || 'Please enter a valid e-mail address']"
        lazy-rules
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        class="col"
        ref="password"
        outlined
        v-model="formData.password"
        label="Password"
        type="password"
        stack-label
        :dense="dense"
        :rules="[
          val => !!val || '* Required',
          val => val.length >= 8 || 'Please use at least 8 characters']"
        lazy-rules
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn
        color="primary"
        :label="tab"
        type="submit" />
    </div>
    <div v-if="formState === 'confirmSignUp'">
      <q-input square filled color="teal" v-model="formData.authCode"/>
      <div class="row">
        <q-btn
          color="primary"
          type="submit"
          @click="confirmSignUp"
          label="Verification code">
          <template v-slot:loading>
            <q-spinner-facebook/>
          </template>
        </q-btn>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['tab', 'toggle'],
  data() {
    return {
      formState: 'signUp',
      formData: {
        email: '',
        password: '',
        username: '',
      }
    }
  },
  methods: {
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      const username = this.$refs.email
      const password = this.$refs.password
      const email = this.$refs.email
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == 'login') {
          await this.$Auth.signIn(username, password)
          this.$AmplifyEventBus.$emit('authState', 'signedIn')
          parent.signedIn = true
          this.$router.push({ name: 'todo' })
        }
        else {
          await this.$Auth.signUp({
            username, password, attributes: { email }
          })
          this.formState = 'confirmSignUp'
        }
      }
    },
    async confirmSignUp () {
      const { username, authCode } = this.formData
      await this.$Auth.confirmSignUp(username, authCode)
      this.toggle()
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>
