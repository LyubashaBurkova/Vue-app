<template>
  <v-container>
    <v-layout v-if="!loading && myAds.length" row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">AdList</h1>
        <v-card class="elevation-10 mb-3" v-for="ad in myAds" :key="ad.id">
          <v-layout>
            <v-flex xs4>
              <v-card-media :src="ad.imageSrc" height="160"></v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2>{{ad.title}}</h2>
                <p>{{ad.discription}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-if="!loading && !myAds.length">
      <v-flex xs12 class="text-xs-center">
        <h1>You have no ads</h1>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular 
          :size="70" 
          :width="7" 
          color="primary" 
          indeterminate
        >
        </v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>
