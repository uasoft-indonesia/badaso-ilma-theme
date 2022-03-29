<template>
  <v-app>
    <Sidebar />
    <Snackbar />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "../Sidebar.vue";
import Snackbar from "../Snackbar.vue";

export default {
  components: {
    Sidebar,
    Snackbar,
  },
  beforeCreate() {
    if (!this.$store.state.isAuthenticated) {
      this.$inertia.visit("/login");
    }
  },
};
</script>
