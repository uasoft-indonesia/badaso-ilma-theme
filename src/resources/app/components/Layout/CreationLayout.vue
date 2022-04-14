<template>
  <v-app>
    <v-container>
      <div class="mt-16">
        <v-btn
          id="back"
          color="white"
          elevation="0"
          style="padding-left: 0; padding-right: 8px"
          @click="redirectBackToClasswork()"
        >
          <v-icon>
            mdi-chevron-left
          </v-icon>
          Back
        </v-btn>
        <div
          id="title"
          class="text-primary text-lg font-medium mb-4 mt-1"
        >
          {{pageTitle}}
        </div>
        <v-divider id="divider" color="#06BBD3" class="mb-6"></v-divider>
        <slot/>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import AppLayout from "./AppLayout";

export default {
  layout: [AppLayout],
  props: {
    courseId: String,
    pageTitle: String,
  },
  name: "CreationLayout",
  methods: {
    redirectBackToClasswork() {
      this.$inertia.visit(`/course/${this.$props.courseId}/classwork`);
    },
  }
}
</script>
