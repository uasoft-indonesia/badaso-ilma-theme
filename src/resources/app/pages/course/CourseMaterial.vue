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
<<<<<<< HEAD
      v-if="this.material.content"
      class="text-base mb-9"
    >
      {{ this.material.content }}
=======
      v-if="this.material.description"
      class="text-base mb-9"
    >
      {{ this.material.description }}
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
<<<<<<< HEAD
import {getCourseMaterialById} from "../../../api/courseMaterial";
=======
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b

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
<<<<<<< HEAD
      material: {},
    }
  },
  methods: {
    async getCourseMaterial() {
      try {
        const response = await getCourseMaterialById(this.$props.materialId);
        this.material = response.data;
      } catch (error) {
      }
    },
  },
  created() {
    this.getCourseMaterial();
=======
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
>>>>>>> fa9fb681535076573bb392d877bc0fd4914e7b1b
  }
}
</script>
