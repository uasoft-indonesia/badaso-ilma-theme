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
      material: {
        id: "1",
        title: "Prime Numbers",
        topic: "Polynomial Arithmetic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
          "Morbi eu lorem ac risus maximus blandit nec in velit. " +
          "Pellentesque eget metus vel massa molestie condimentum sit amet ac massa. " +
          "Vivamus tincidunt tortor non ultricies pulvinar. Nunc eget posuere risus, vitae finibus diam. " +
          "Proin varius, tortor nec aliquam commodo, massa nibh vestibulum turpis, in pulvinar magna turpis vel tortor."
      }
    }
  }
}
</script>
