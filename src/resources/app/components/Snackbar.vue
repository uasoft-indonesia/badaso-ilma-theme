<template>
  <v-snackbar :value="getIsVisible" top class="snackbar">
    <span id="snackbar-content">{{ getContent }}</span>
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="test"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  computed: {
    getIsVisible() {
      return this.$store.state.snackbar.isVisible;
    },
    getContent() {
      return this.$store.state.snackbar.content;
    },
  },
};
</script>
