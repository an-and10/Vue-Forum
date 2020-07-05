<template>
  <v-container>
   <v-row align="start" justify="center" dense
          v-for="meetup in meetups"
          :key="meetup.id"
   >
      <v-col
      cols="12"
      >
        <v-container>
          <v-card
            dark
          >
              <v-row>

                <v-col cols="lg-3 sm-12 md-3">
                  <v-img
                    class="ma-3"
                    height="150"
                    width="auto"
                    tile
                    :src="meetup.imageUrl"
                  >
                  </v-img>
                </v-col>
                <v-col cols="lg-9 sm-12 md-9 ">
                  <v-card-title class="headline">{{ meetup.title  }} </v-card-title>
                  <v-card-subtitle> {{meetup.time }} -  {{ meetup.date}} </v-card-subtitle>
                  <v-card-text>{{ meetup.descriptions }}</v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" :to="'/meetups/'+ meetup.id " >View Meetup <v-icon > mdi-arrow</v-icon> </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
          </v-card>
        </v-container>
      </v-col>
   </v-row>
  </v-container>
</template>
<script>

  export default {
    name: 'Meetups',
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    },
    data: () => ({



    }),
    methods:{

    }
  }
</script>
