<template>
  <v-app>
    <v-container>
      <div class="my-10 mx-10">
        <v-col cols="6">
          <v-row class="text-primary text-lg" id="teacher-title"> Teachers </v-row>
          <v-row>
            <v-divider class="bg-primary my-1"></v-divider>
          </v-row>
          <v-row
            v-for="teacher in peoples"
            v-bind:key="teacher.name"
            v-if="teacher.role == 'teacher'"
          >
            <v-avatar class="bg-primary my-3" id="teacher-avatar" size="36"></v-avatar>
            <div class="ml-3 my-4" id="teacher-name">{{ teacher.name }}</div>
          </v-row>
          <v-row class="text-primary text-lg" id="classmate-title"> Classmates </v-row>
          <v-row>
            <v-divider class="bg-primary my-1"></v-divider>
          </v-row>
          <v-row
            v-for="student in peoples"
            v-bind:key="student.name"
            v-if="student.role == 'student'"
          >
            <v-avatar class="bg-primary my-3" id="student-avatar" size="36"></v-avatar>
            <div class="ml-3 my-4" id="student-name">{{ student.name }}</div>
          </v-row>
        </v-col>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import api from "../../api/people";
import CourseStream from "./courseStream.vue";
import AppLayout from "../components/Layout/AppLayout.vue";

export default {
  beforeCreate() {
    if (!this.$store.state.isAuthenticated) {
      this.$inertia.visit("/login");
    }
  },

  layout: [AppLayout, CourseStream],
  props: {
    id: {
    },
  },

  data() {
    return {
      peoples: [
        {
          name: "",
          role: "",
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
