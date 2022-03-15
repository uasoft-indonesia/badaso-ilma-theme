<template>
  <v-container>
    <div class="my-10 mx-10">
      <v-col cols="6">
        <v-row class="text-primary text-lg" id="title"> Teachers </v-row>
        <v-row>
          <v-divider class="bg-primary my-1"></v-divider>
        </v-row>
        <v-row
          v-for="teacher in peoples"
          v-bind:key="teacher.name"
          v-if="teacher.role == 'teacher'"
        >
          <v-avatar class="bg-primary my-3" id="avatar" size="36"></v-avatar>
          <div class="ml-3 my-4" id="name">{{ teacher.name }}</div>
        </v-row>
        <v-row class="text-primary text-lg" id="title"> Classmates </v-row>
        <v-row>
          <v-divider class="bg-primary my-1"></v-divider>
        </v-row>
        <v-row
          v-for="student in peoples"
          v-bind:key="student.name"
          v-if="student.role == 'student'"
        >
          <v-avatar class="bg-primary my-3" id="avatar" size="36"></v-avatar>
          <div class="ml-3 my-4" id="name">{{ student.name }}</div>
        </v-row>
      </v-col>
    </div>
  </v-container>
</template>
<script>
import api from "../../api/people";

export default {
  props: {
    id: {
      default: 1,
    },
  },
  data() {
    return {
      peoples: [
        {
          name: "Placeholder",
          role: "teacher",
        },
      ],
    };
  },
  methods: {
    async getData(id) {
      try {
        const res = await api.people(id);
        this.peoples = res.data;
      } catch (e) {
      }
    },
  },
  mounted() {
    this.getData(this.id);
  },
};
</script>
