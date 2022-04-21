<template>
<<<<<<< HEAD
  <CreationLayout
    :courseId="this.$props.id"
    pageTitle="Create Material"
  >
    <v-snackbar v-model="snackbar.isVisible" :timeout="3000" top>
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar.isVisible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          elevation="0"
          class="mb-6"
          id="drop-down"
        >
          Topic
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-form
      ref="form"
      v-model="isFormValid"
    >
=======
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
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
      <v-text-field
        id="title-form"
        label="Title"
        v-model="courseMaterial.title"
        :rules="fieldRules.concat(lengthRules)"
        :counter="255"
        outlined
        v-model="form.title"
        required
      ></v-text-field>
      <v-textarea
        id="description"
        label="Description"
        v-model="courseMaterial.content"
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
<<<<<<< HEAD
      <v-btn
        id="cancel-button"
        color="error"
        elevation="0"
        @click="redirectBackToClasswork"
      >
        Cancel
      </v-btn>
=======
      <v-btn id="cancel-button" color="error" elevation="0"> Cancel </v-btn>
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
      <v-btn
        id="create-button"
        class="ml-4"
        color="primary"
        elevation="0"
<<<<<<< HEAD
        :disabled="!isFormValid"
        @click="createMaterial"
=======
        @click="postData"
        :disabled="!isValid"
        :loading="isSubmitting"
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
      >
        Create
      </v-btn>
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
<<<<<<< HEAD
import {getTopicAPI} from "../../../api/topic";
import {createCourseMaterial} from "../../../api/courseMaterial";
=======
import { getTopicAPI } from "../../../api/topic";
import { createCourseMaterial, uploadFile } from "../../../api/course/material";
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b

export default {
  components: {CreationLayout},
  layout: [AppLayout],
  props: {
    id: String,
  },
  name: "CreateCourseMaterial",
  data() {
    return {
      items: [],
<<<<<<< HEAD
      isFormValid: false,
      courseMaterial: {
        course_id: parseInt(this.$props.id),
        topic_id: '',
        title: '',
        content: '',
        file_url: '',
        link_url: '',
      },
      snackbar: {
        isVisible: false,
        text: "",
      },
      fieldRules: [(v) => (!!v || "Field cannot be empty")],
      lengthRules: [(v) => (v.length <= 255 || "Characters are off limit")],
=======
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
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
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
<<<<<<< HEAD
    },
    async createMaterial() {
      this.validate();
      if (this.isFormValid) {
        const { error, errorMessage } = await createCourseMaterial(this.courseMaterial);
        if (error) {
          this.showSnackbar(errorMessage);
        } else {
          this.redirectBackToClasswork();
        }
      }
    },
    redirectBackToClasswork() {
      this.$inertia.visit(`/course/${this.$props.id}/classwork`);
    },
    showSnackbar(text) {
      this.snackbar.text = text;
      this.snackbar.isVisible = true;
=======
      this.isSubmitting = false;
    },
    getItemValue(item) {
      return item.id;
    },
    getItemText(item) {
      return item.title;
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
    },
  },
  mounted() {
    this.getTopic();
  },
};
</script>
