<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="text"
        class="col"
        square
        filled
        bg-color="white"
        bottom-slots
        placeholder="Search"
        dense>
        <template v-slot:prepend>
          <q-icon
            bg-color="white"
            name="search" />
        </template>
        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="close"
            @click="text = ''"
            class="cursor-pointer" />
        </template>
      </q-input>
    </div>
    <div class="col-4">
        <q-img
          src="statics/street.jpg"
          sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
          :ratio="1"
          contain
        />
        <q-img
          src="statics/hotairballoon.jpg"
          sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
          :ratio="1"
          contain
        />
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
