<template>
  <v-container>
    <v-btn @click="redirectBackToClasswork(id)" id="back-btn"> &lt; Back </v-btn>
    <div id="title">
      <v-row class="text-primary text-lg my-4" id="create-topic-text"> Create Topic </v-row>
      <v-row>
        <v-divider color="#06BBD3"></v-divider>
      </v-row>
    </div>
    <v-form v-model="isFormValid" ref="form">
      <v-row>
        <v-text-field
          class="mt-6"
          label="Topic"
          outlined
          v-model="topicTitle"
          :rules="topicRules.concat(lengthRules)"
          id="title-field"
        ></v-text-field>
      </v-row>
      <div class="text-right">
        <v-btn
          color="error"
          elevation="0"
          class="mr-3"
          @click="redirectBackToClasswork(id)"
          id="cancel-btn"
        >
          Cancel
        </v-btn>
        <v-btn elevation="0" @click="createTopic()" id="create-btn"> Create </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import AppLayout from "../components/Layout/AppLayout.vue";
import { createTopicAPI } from "../../api/topic";

export default {
  layout: [AppLayout],
  props: {
    id: String
  },
  data() {
    return {
      isFormValid: false,
      topicTitle: "",
      topicRules: [(v) => (!!v || "Topic cannot be empty")],
      lengthRules: [(v) => (v.length <= 255 || "Characters are off limit")],
    };
  },
  methods: {
    redirectBackToClasswork(id) {
      this.$inertia.visit(`/course/${id}/classwork`);
    },

    validate() {
      this.$refs.form.validate();
    },

    async createTopic() {
      this.validate();
      if (this.isFormValid) {
        const { data, error, errorMessage } = await createTopicAPI({
          course_id: this.$props.id,
          title: this.topicTitle,
        });
        this.$inertia.visit(`/course/${this.$props.id}/classwork`);
      }
    },
  },
};
</script>
