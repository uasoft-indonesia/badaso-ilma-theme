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
        <div class="my-4">
          <div
            id="topic-title"
            v-if="this.$props.topicTitle"
            class="text-textGray text-md"
          >
            {{ topicTitle }}
          </div>
          <div
            id="title"
            class="text-primary text-lg font-medium"
          >
            {{ pageTitle }}
          </div>
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
    topicTitle: String,
  },
  name: "CreationLayout",
  methods: {
    redirectBackToClasswork() {
      this.$inertia.visit(`/course/${this.$props.courseId}/classwork`);
    },
  }
}
</script>
