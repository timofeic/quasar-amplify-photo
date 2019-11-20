<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm">
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
            <q-btn-dropdown
              flat
              unelevated
              rounded
              dense
              dropdown-icon="add">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section avatar>
                    <q-avatar icon="photo"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Photo</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section avatar>
                    <q-avatar icon="album"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Album</q-item-label>
                  </q-item-section>
                </q-item>


                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section avatar>
                    <q-avatar icon="assignment"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Vacation</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
        </template>
      </q-input>
    </div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div>
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
    </q-infinite-scroll>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
