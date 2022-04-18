<template>
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
      <v-text-field
        id="title-form"
        label="Title"
        v-model="courseMaterial.title"
        :rules="fieldRules.concat(lengthRules)"
        :counter="255"
        outlined
      ></v-text-field>
      <v-textarea
        id="description"
        label="Description"
        v-model="courseMaterial.content"
        placeholder="This material is about..."
        outlined
      ></v-textarea>
    </v-form>
    <div class="text-right mt-7">
      <v-btn
        id="cancel-button"
        color="error"
        elevation="0"
        @click="redirectBackToClasswork"
      >
        Cancel
      </v-btn>
      <v-btn
        id="create-button"
        class="ml-4"
        color="primary"
        elevation="0"
        :disabled="!isFormValid"
        @click="createMaterial"
      >
        Create
      </v-btn>
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
import {getTopicAPI} from "../../../api/topic";
import {createCourseMaterial} from "../../../api/courseMaterial";

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
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async getTopic() {
      try {
        const response = await getTopicAPI(this.$props.id);
        this.items = response.data;
      } catch (error) {
      }
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
    },
  },
  mounted() {
    this.getTopic();
  }
}
</script>
