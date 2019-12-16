<template>
  <div class="text-center">
    <v-dialog v-model="modal" width="500">
      <template v-slot:activator="{ on }">       
        <v-btn class="warning" flat slot="activator" v-on="on">Edit</v-btn>
      </template>
      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h2 class="text--primary">Edit ad</h2>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field name="title" label="Title" type="text" v-model="editedTitle"></v-text-field>
                <v-text-field
                  name="description"
                  label="Description"
                  type="text"
                  multi-line
                  v-model="editedDescription"
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
                  <v-btn flat @click="onCancel">Cancel</v-btn>
                  <v-btn class="success" flat @click="onSave">Save</v-btn>
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    };
  },

  methods: {
    onCancel() {
      this.editedTitle = this.ad.title;
      this.editedDescription = this.ad.description;
      this.modal = false;
    },
    onSave() {
        if (this.editedTitle !== '' && this.editedDescription !== ''){
            this.$store.dispatch('updateAd', {
                title: this.editedTitle,
                description: this.editedDescription,
                id: this.ad.id
            })

            this.modal = false
        }
    }
  }
};
</script>