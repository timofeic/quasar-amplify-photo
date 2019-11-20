<template>
  <q-page padding>
    <!-- <amplify-authenticator
      class="authenticator__form"
      :authConfig="authConfig"
      data-test="authenticator"
    ></amplify-authenticator> -->
    <q-card class="auth-tabs">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <login-register :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register">
            <login-register :tab="tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>
// @ts-ignore
import { AmplifyEventBus } from 'aws-amplify-vue';
/**
 * Authentication view authenticates a customer and redirects to desired page if successful
 * Non-authenticated users are redirected to this view via Route Guards
 */

export default {
  name: 'Authentication',
  /**
   * @param {string} redirectTo - Sets Route one must go once authenticated
   */
  props: {
    redirectTo: String,
  },
  mounted() {
    /**
     * At mount lifecycle hook, it listens for `authState` event,
     * and when successfully signed-in it redirects to desired page
     */
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        // return to where we came from
        this.$router.push({ name: this.redirectTo });
      }
    });
  },
  data() {
    return {
      tab: 'register',
      authConfig: {
        signUpConfig: {
          defaultCountryCode: '44',
          signUpFields: [
            {
              label: 'First name',
              key: 'given_name',
              required: true,
              displayOrder: 0,
            },
            {
              label: 'Family name',
              key: 'family_name',
              required: true,
              displayOrder: 1,
            },
          ],
        },
      },
    };
  },
  components: {
    'login-register': require('components/Auth/LoginRegister.vue').default,
  },
};
</script>

<style>
  .auth-tabs {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
