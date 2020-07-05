<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" app clipped>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app dark color="primary" min-height="auto">
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up "
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >Home</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          text
          outlined
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    };
  },

  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-home", title: "Sign up", link: "/signup" },
        { icon: "mdi-home", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "mdi-home", title: "View Meetups", link: "meetup/meetups" },
          {
            icon: "n=mdi-home",
            title: "Organize Meetup",
            link: "/meetup/createmeetup"
          },
          { icon: "mdi-home", title: "Profile", link: "/profile" }
        ];
      }

      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>
