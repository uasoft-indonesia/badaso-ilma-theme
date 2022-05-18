<template>
  <CreationLayout
    :courseId="this.$props.courseId"
<<<<<<< HEAD
    pageTitle="Worksheet 1"
    topicTitle="Numerical Analysis"
    :contentId="this.$props.materialId"
    teacherId="1"
    contentType="material"
  >
    This is assignment page
=======
    :pageTitle="this.assignment.title"
    :topicTitle="this.assignment.topic.title"
    :contentId="this.$props.assignmentId"
    :teacherId="this.teacherId"
    contentType="assignment"
  >
    <div id="description" v-if="this.assignment.description" class="text-base mb-9">
      {{ this.assignment.description }}
    </div>
    <div
      v-if="this.assignment.fileUrl"
      class="flex flex-col justify-center items-center"
    >
      <embed :src="this.assignment.fileUrl" width="80%" height="500px" />
      <a :href="this.assignment.fileUrl" target="_blank" class="mt-2 mb-10">
        <v-btn color="primary">Download File</v-btn>
      </a>
    </div>
    <div
      v-if="this.assignment.linkUrl"
      class="flex flex-col justify-center items-center"
    >
      <a :href="this.assignment.linkUrl" target="_blank" class="mt-2 mb-10">
        {{ this.assignment.linkUrl }}
      </a>
    </div>
>>>>>>> 7b036c3020950a52ab7a214d39f2e629cee1b463
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
<<<<<<< HEAD
=======
import { getCourseAssignmentById } from "../../../api/course/assignment";
import { courseDetail } from "../../../api/course/detail";

>>>>>>> 7b036c3020950a52ab7a214d39f2e629cee1b463
export default {
  name: "Assignment",
  components: {CreationLayout},
  layout: [AppLayout],
  props: {
    courseId: String,
<<<<<<< HEAD
    materialId: String,
=======
    assignmentId: String,
>>>>>>> 7b036c3020950a52ab7a214d39f2e629cee1b463
  },
  data(){
    return {
      isValid: false,
      file: null,
      items: [],
<<<<<<< HEAD
=======
      assignment: {},
      teacherId: String,
>>>>>>> 7b036c3020950a52ab7a214d39f2e629cee1b463
      form: {
        file_url: '',
        link_url: '',
      },
    }
  },
  methods: {
<<<<<<< HEAD
=======
    async getCourseAssignment() {
      try {
        let response = await getCourseAssignmentById(this.$props.assignmentId);
        if (response.data.topic === null) {
          response.data.topic = { title: "" };
        }
        this.assignment = response.data;
      } catch (error) {
        await this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
      }
    },
    async getTeacher(courseId) {
      try {
        const response = await courseDetail(courseId);
        if (response.data.createdBy){
          this.teacherId = response.data.createdBy
        }
      } catch (error) {
        await this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
      }
    },
>>>>>>> 7b036c3020950a52ab7a214d39f2e629cee1b463
    redirectBackToClasswork() {
      this.$inertia.visit(`/course/${this.$props.courseId}/classwork`);
    },
    getItemValue(item) {
      return item.id;
    },
    getItemText(item) {
      return item.title;
    },
<<<<<<< HEAD
  }
=======
  },
  created() {
    this.getCourseAssignment();
    this.getTeacher(this.$props.courseId);
  },
>>>>>>> 7b036c3020950a52ab7a214d39f2e629cee1b463
}
</script>
