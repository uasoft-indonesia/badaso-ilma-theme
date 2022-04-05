<template>
  <v-container>
    <v-btn @click="redirectBackToClasswork(id)"> &lt; Back </v-btn>
    <div id="title">
      <v-row class="text-primary text-lg my-4"> Update Topic </v-row>
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
        ></v-text-field>
      </v-row>
      <div class="text-right">
        <v-btn
          color="error"
          elevation="0"
          class="mr-3"
          @click="redirectBackToClasswork(id)"
        >
          Cancel
        </v-btn>
        <v-btn elevation="0" @click="updateTopic()"> Update </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import AppLayout from "../components/Layout/AppLayout.vue";
import { editTopicAPI } from "../../api/topic";

export default {
  layout: [AppLayout],
  props: {
    id: String,
    topicId: String,
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

    async updateTopic() {
      this.validate();
      if (this.isFormValid) {
        const { data, error, errorMessage } = await editTopicAPI({
          title: this.topicTitle,
        }, this.$props.topicId);
        this.$inertia.visit(`/course/${this.$props.id}/classwork`);
      }
    },
  },
  mounted() {
    this.getData(this.$props.id);
  },
};
</script>
