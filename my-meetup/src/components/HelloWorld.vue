<template>
 <v-container>
  <v-row class="justify-center wrap col-sm-12" >
    <v-col xs12 sm6  class="text-xs-center text-sm-right ">
      <v-btn  to="/meetups" class="info">Explore Meetups</v-btn>
    </v-col>
    <v-col xs12 sm6  class="text-xs-center text-sm-left">
      <v-btn  to="/meetup/new" class="info">Organize Meetup</v-btn>
    </v-col>
  </v-row>
  <v-row wrap class="mt-2">
    <v-col>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        style="cursor: pointer"
      >
        <v-carousel-item
        v-for="meetup in meetups"
        :key="meetup.id"
        :src="meetup.imageUrl"
        @click="loadMeetup(meetup.id)"
        >
            <v-row
              wrap
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3 black--text">{{ meetup.title }} </div>
            </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
   <v-row
    class="mx-auto"
     justify="center"
   >
     <div class="display-1">Just Awesome description </div>
   </v-row>
 </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    data: () => ({

    }),
    methods:{
      loadMeetup($id){
        this.$router.push('meetups/' + $id);
      }
    }
  }
</script>
