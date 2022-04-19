<template>
  <CreationLayout courseId="2" pageTitle="Create Material">
    <v-form ref="form" v-model="isValid">
      <v-autocomplete
        v-model="form.topic_id"
        :items="items"
        label="Topic"
        outlined
        :item-text="getItemText"
        :item-value="getItemValue"
        required
      ></v-autocomplete>
      <v-text-field
        id="title-form"
        label="Title"
        outlined
        v-model="form.title"
        required
      ></v-text-field>
      <v-textarea
        id="description"
        label="Description"
        placeholder="This material is about..."
        outlined
        v-model="form.content"
        required
      ></v-textarea>
      <div class="flex">
        <v-btn color="primary" elevation="0" class="mr-6" height="56">
          <v-icon> mdi-paperclip </v-icon>
        </v-btn>
        <v-file-input
          id="file-form"
          truncate-length="100"
          outlined
          accept="image/png, image/jpeg, application/pdf, image/jpg"
          label="File"
          prepend-icon=""
          v-model="file"
        ></v-file-input>
      </div>
      <div class="flex">
        <v-btn color="primary" elevation="0" class="mr-6" height="56">
          <v-icon> mdi-link </v-icon>
        </v-btn>
        <v-text-field
          id="link-form"
          label="Link"
          outlined
          v-model="form.link_url"
        ></v-text-field>
      </div>
    </v-form>
    <div class="text-right mt-7">
      <v-btn id="cancel-button" color="error" elevation="0"> Cancel </v-btn>
      <v-btn
        id="create-button"
        class="ml-4"
        color="primary"
        elevation="0"
        @click="postData"
        :disabled="!isValid"
        :loading="isSubmitting"
      >
        Create
      </v-btn>
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
import { getTopicAPI } from "../../../api/topic";
import { createCourseMaterial, uploadFile } from "../../../api/course/material";

export default {
  components: { CreationLayout },
  layout: [AppLayout],
  props: {
    id: String,
  },
  name: "CreateCourseMaterial",
  data() {
    return {
      items: [],
      isValid: false,
      isSubmitting: false,
      file: null,
      form: {
        topic_id: null,
        title: null,
        content: null,
        file_url: null,
        link_url: null,
        course_id: this.$props.id,
      },
    };
  },
  methods: {
    async getTopic() {
      this.isSubmitting = true;
      try {
        const response = await getTopicAPI(this.$props.id);
        this.items = response.data;
      } catch (error) {
        this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
      }
      this.isSubmitting = false;
    },
    async postData() {
      this.isSubmitting = true;
      try {
        const fileUrlResponse = await uploadFile(this.file);
        if (fileUrlResponse.errorMessage) {
          throw fileUrlResponse.errorMessage;
        }
        this.form.file_url = fileUrlResponse.data;
        const response = await createCourseMaterial(this.form);
        if (response.errorMessage) {
          throw response.errorMessage;
        }
        this.$inertia.visit(`/course/${this.$props.id}/classwork`);
      } catch (error) {
        this.$store.dispatch("OPEN_SNACKBAR", "Error uploading data");
      }
      this.isSubmitting = false;
    },
    getItemValue(item) {
      return item.id;
    },
    getItemText(item) {
      return item.title;
    },
  },
  mounted() {
    this.getTopic();
  },
};
</script>
