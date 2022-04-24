<template>
  <CreationLayout
    :courseId="this.$props.courseId"
    :pageTitle="this.material.title"
    :topicTitle="this.material.topic"
    :contentId="this.material.id"
    contentType="material"
  >
    <div
      id="description"
      v-if="this.material.description"
      class="text-base mb-9"
    >
      {{ this.material.description }}
    </div>
    <div
      id="header-comment"
      class="text-black text-lg font-medium"
    >
      Comments 
      <v-icon
        color="black"
      >
        mdi-forum
      </v-icon>
      <v-divider id="divider" color="#06BBD3" class="mb-6"></v-divider>
    </div>
    <div id="comment">
      <v-row id="comment-form">
        <v-col cols="19">
          <v-form
            ref="form"
            v-model="isFormValid"
            class="mx-6 my-4"
          >
            <v-textarea
              outlined
              rows = "1"
              v-model="comment"
              :rules="commentRules.concat(lengthRules)"
              :counter="65535"
              placeholder="Comment here..."
            ></v-textarea>
          </v-form>
        </v-col>
        <v-col cols="1">
          <v-btn
            icon
            id="post-button"
            class="my-6"
            depressed
            color=primary
            @click="postComment"
            :disabled="!isFormValid"
          >
            <v-icon>
              mdi-send
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </CreationLayout> 
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";

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
      comment: "",
      isFormValid: false,
      commentRules: [(v) => (!!v || "Comment cannot be empty")],
      lengthRules: [(v) => (v.length <= 65535 || "Characters are off limit")],
      material: {
        id: "1",
        title: "Prime Numbers",
        topic: "Polynomial Arithmetic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
          "Morbi eu lorem ac risus maximus blandit nec in velit. " +
          "Pellentesque eget metus vel massa molestie condimentum sit amet ac massa. " +
          "Vivamus tincidunt tortor non ultricies pulvinar. Nunc eget posuere risus, vitae finibus diam. " +
          "Proin varius, tortor nec aliquam commodo, massa nibh vestibulum turpis, in pulvinar magna turpis vel tortor."
      },
    }
  }
}
</script>
