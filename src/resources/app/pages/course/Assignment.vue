<template>
  <CreationLayout
    :courseId="this.$props.courseId"
    pageTitle="Worksheet 1"
    topicTitle="Numerical Analysis"
    :contentId="this.$props.materialId"
    teacherId="1"
    contentType="material"
  >
    This is assignment page
    <v-form ref="form" v-model="isValid" class="mt-8">
      <div class="flex">
        <v-btn color="primary" elevation="0" class="mr-6" height="56">
          <v-icon> mdi-paperclip</v-icon>
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
          <v-icon> mdi-link</v-icon>
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
        :disabled="!isValid"
      >
        Save
      </v-btn>
    </div>
  </CreationLayout>
</template>
<script>
import CreationLayout from "../../components/Layout/CreationLayout";
import AppLayout from "../../components/Layout/AppLayout";
export default {
  name: "Assignment",
  components: {CreationLayout},
  layout: [AppLayout],
  props: {
    courseId: String,
    materialId: String,
  },
  data(){
    return {
      isValid: false,
      file: null,
      items: [],
      form: {
        file_url: '',
        link_url: '',
      },
    }
  },
  methods: {
    redirectBackToClasswork() {
      this.$inertia.visit(`/course/${this.$props.courseId}/classwork`);
    },
    getItemValue(item) {
      return item.id;
    },
    getItemText(item) {
      return item.title;
    },
  }
}
</script>
