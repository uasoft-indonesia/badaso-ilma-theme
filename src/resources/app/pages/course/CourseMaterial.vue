<template>
  <CreationLayout
    :courseId="this.$props.courseId"
    :pageTitle="this.material.title"
    :topicTitle="this.material.topic.title"
    :contentId="this.material.id"
    contentType="material"
  >
    <div
      id="description"
      v-if="this.material.content"
      class="text-base mb-9"
    >
      {{ this.material.content }}
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
import { getCourseMaterialById } from "../../../api/course/lessonMaterial";

export default {
  name: "CourseMaterial",
  components: {CreationLayout},
  layout: [AppLayout],
  props: {
    courseId: String,
    materialId: String,
  },
  data() {
    return {
      material: {},
    }
  },
  methods: {
    async getCourseMaterial() {
      try {
        let response = await getCourseMaterialById(this.$props.materialId);
        if (response.data.topic === null){
          response.data.topic = {title: ''}
        }
        this.material = response.data;
      } catch (error) {
        await this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
      }
    },
  },
  created() {
    this.getCourseMaterial();
  }
}
</script>
