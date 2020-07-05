<template>
  <v-container>
    <v-card
      class="mx-auto"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="meetup.imageUrl"
      >
        <v-card-title>{{ meetup.title }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">{{ meetup.date }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ meetup.time }}</div>

        <div>{{ meetup.descritions }}</div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <app-register-dialog
          :meetupId="meetup.id"
          v-if="userIsAuthenticated && !userIsCreator"></app-register-dialog>
      </v-card-actions>
    </v-card>

  </v-container>
</template>
<script>

  export default {
    name: 'Meetup',
    props:['id'],
    computed:{
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      userIsRegistered () {
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.id
        }) >= 0
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.meetup.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    },

    data: () => ({



    })
  }
</script>
