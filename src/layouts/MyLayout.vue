<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-btn
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right" />
      </q-toolbar>
      <q-img
        src="statics/hotairballoon.jpg"
        class="header-image absolute-top" />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area
          style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to="/"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="photo" />
              </q-item-section>

              <q-item-section>
                Photos
              </q-item-section>
            </q-item>
            <q-item
              to="/albums"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="album" />
              </q-item-section>

              <q-item-section>
                Albums
              </q-item-section>
            </q-item>
            <q-item
              to="/settings"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Settings
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="statics/hotairballoon.jpg" style="height: 150px">
          <div
            class="absolute-bottom bg-transparent"
            v-if="isLoggedIn">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">{{ user.username }}</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      leftDrawerOpen: false,
      signedIn: false,
    };
  },
  beforeCreate () {
    this.$Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
        this.signedIn = true
      })
      .catch(() => console.log('not signed in...'))
  }
};
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    filter: grayscale(100%)
  }
</style>
