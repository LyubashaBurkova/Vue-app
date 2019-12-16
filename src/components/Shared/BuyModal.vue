<template>
  <div class="text-center">
    <v-dialog v-model="modal" width="500">
      <template v-slot:activator="{ on }">       
        <v-btn class="primary" flat slot="activator" v-on="on">Buy</v-btn>
      </template>
      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h2 class="text--primary">Do you wan't to buy it?</h2>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field 
                name="name" 
                label="Your name" 
                type="text" 
                v-model="name">
                </v-text-field>
                <v-text-field
                  name="phone"
                  label="Your phone"
                  type="text"
                  v-model="phone"
                ></v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-spacer> -->
                  <v-btn 
                    flat 
                    @click="onCancel"
                    :disabled="localLoading"
                  >
                  Close
                  </v-btn>

                  <v-btn 
                    class="success" 
                    flat 
                    @click="onSave"
                    :disabled="localLoading"
                    :loading="localLoading"
                  >
                  Buy it!</v-btn>
                <!-- </v-spacer> -->
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>      
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false
    };
  },

  methods: {
    onCancel() {
      this.name = ''
      this.phone = ''
      this.modal = false
    },
    onSave() {
        if (this.name !== '' && this.phone !== ''){
            this.localLoading = true
            this.$store.dispatch('createOrder', {
                name: this.name,
                phone: this.phone,
                adId: this.ad.id,
                ownerId: this.ad.ownerId
            })
            .finally(() => {
                this.name = ''
                this.phone = ''
                this.localLoading = false
                this.modal = false
            })

            this.modal = false
        }
    }
  }
};
</script>