<template>
  <CreationLayout
    :courseId="this.$props.courseId"
    :pageTitle="this.material.title"
    :topicTitle="this.material.topic.title"
    :contentId="this.$props.materialId"
    contentType="material"
  >
    <div
      id="description"
      v-if="this.material.content"
      class="text-base mb-9"
    >
      {{ this.material.content }}
    </div>
    <div
      id="header-comment"
      class="text-black text-lg font-medium"
    >
      Comments 
      <v-icon
        id="icon-comment"
        color="black"
      >
        mdi-forum
      </v-icon>
      <v-divider id="divider" color="#06BBD3" class="mb-4"></v-divider>
    </div>
    <div v-for="comment in material.comments" v-bind:key="material.id">
    <ListComment 
      :name="comment.createdBy.name"
      :date="comment.createdAt"
      :content="comment.content"
      :id="comment.id"
    >
    </ListComment>
    </div>
    <CreateComment
      :materialId="this.$props.materialId"
      :getCourseMaterial = "this.getCourseMaterial"
    >
    </CreateComment>
  </CreationLayout> 
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
import CreateComment from "../../components/CreateComment";
import ListComment from "../../components/ListComment";
import { getCourseMaterialById } from "../../../api/course/lessonMaterial";

export default {
  name: "CourseMaterial",
  components: {CreationLayout, CreateComment, ListComment},
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
  },
}
</script>
