<template>
  <v-container>
    <v-row>
      <v-col class="col-sm-12 col-lg-8">
        <h1>Create meet Up</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-sm-11 col-md-12 ">
      <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
        @submit.prevent="onCreateMeetup"
      >
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="location"
          :rules="locationRules"
          label="Location"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"

          label="Descritions"
          required
        ></v-text-field>

        <v-text-field
          v-model="imageUrl"
          :items="imageUrl"
          :rules="[v => !!v || 'Item is required']"
          label="Image "
          required
        ></v-text-field>
        <v-dialog
          ref="dialog1"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            prepend-icon="mdi-event"
            readonly

            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal=false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog1.save(date)">OK</v-btn>
        </v-date-picker>
        </v-dialog>
      <!-- Time Picker  -->

          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Picker in dialog"
                prepend-icon="mdi-access_time"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal2"
              v-model="time"
              full-width

            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
            </v-time-picker>
          </v-dialog>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 sm6 offset-sm-6"
         type="submit"
        >
         Submit
        </v-btn>

      </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'CreateMeetup',

    data: () => ({
      valid: true,
      lazy: false,
      date: new Date().toISOString().substr(0,10),
      menu: false,
      modal: false,
      time: "",
      modal2: false,
      title:"",
      location:"",
      description:"",
      imageUrl : "",
      titleRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >=2 ) || 'Name must be less than 10 characters',
      ],
      locationRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

    }),
    computed:{
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods:{
      onCreateMeetup () {
        if (!this.valid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.date,
          time:this.time
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetup/meetups')
      },

    }

  }
</script>
