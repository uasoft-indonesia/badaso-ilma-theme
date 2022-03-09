<template>
  <div class="screen mx-16">
    <div
      class="h-16"
    ></div>
    <div
      class="flex flex-row flex-wrap items-start space-x-10"
    >
      <div 
        class="m-0"
      />
      <Card 
        id="course-card"
        class="mb-10"
      />
      <Card 
        class="mb-10"
      />
      <Card 
        class="mb-10"
      />
      <Card 
        class="mb-10"
      />
      <Card 
        class="mb-10"
      />
      <Card 
        class="mb-10"
      />
      <Card 
        class="mb-10"
      />
      <Add 
        id="add-course-card"
        class="mb-10"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/CourseCard.vue";
import Add from "../components/AddCourseCard.vue";

export default {
  components: {
    Card,
    Add,
  },
};
</script>
