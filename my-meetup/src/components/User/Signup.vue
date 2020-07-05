<template>

 <v-container>
   <v-row v-if="error" col="col-lg-12 col-md-12">
     <alert-app @dismissed="onDismissed" :text="error.message"></alert-app>
   </v-row>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="SignUp"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      :rules="[comparePassword]"
      label="Confirm Password"
      required
    ></v-text-field>
      <div class="text-center">
    <v-btn
      sm-12
      class="ma-2 sm-12 offset-sm-3"
      :loading="loading"
      :disabled="loading"
      color="info"
      type="submit"
    >
    Sign Up
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
</div>
  </v-form>
 </v-container>
</template>
Name
<script>
  export default {
    name:'Signup',

    data: () => ({

      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',

      ],
      confirmPassword: '',

    }),

    computed:{
      comparePassword(){
        return this.password !== this.confirmPassword ? 'Password Do not match ' : ''
      },
      user(){
        return this.$store.getters.user
      },
      error(){
        return this.$store.getters.error
      },
      loading(){
        return this.$store.getters.loading
      }
    },

    methods: {
      SignUp(){
       this.$store.dispatch('onSignupUser', {
         email:this.email,
       password: this.password
       })
       console.log( this.email + " - " + this.name + " - " + this.password )

     },
      onDismissed(){
        console.log('Dismeeed Alert')
        this.$store.dispatch('clearError')

      }

    },
    watch:{
      user(value){
        if (value !==null && value !== undefined){
          this.$router.push('/')
        }
      }
    }

  }
</script>

<style scoped>

</style>
