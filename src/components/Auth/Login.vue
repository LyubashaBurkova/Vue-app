<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-15">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>             
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" validation>
                  <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="email"
                                type="email"
                                v-model="email"
                                :rules="emailRules">
                  </v-text-field>
                  <v-text-field
                                id="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                v-model="password"
                                :counter="6"
                                :rules="passwordRules">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                       color="primary"
                       @click="onSubmit"
                       :disabled="!valid || loading"                       
                       >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password:'',
        valid: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
        ]
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }      
    },
    methods: {
      onSubmit() {       
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }

          this.$store.dispatch('loginUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch(() => {})
        }       
      }
    },
    created(){
      //есть ошибка, посмотреть 106
      if (this.$route.query['loginError']){
        this.$store.dispatch('setError', 'Please log in to access this page.')
      }
    }
  }
</script>
