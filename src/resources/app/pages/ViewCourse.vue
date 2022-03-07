<template>
  <v-app>
    <div>
      <div
        class="h-16"
      ></div>
      <Card id="course-card"/>
    </div>
  </v-app>
</template>

<script>
import Card from "../components/CourseCard.vue";

export default {
  components: {
    Card,
  },
};
</script>