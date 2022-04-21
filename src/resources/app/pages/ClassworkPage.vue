<template>
  <v-container>
    <div class="my-10 mx-10">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            class="mb-2"
            color="primary"
            v-bind="attrs"
            v-on="on"
            id="create-button"
          >
            + Create
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-btn
              block
              class="mt-1"
              elevation="0"
              @click="redirectToCreateTopic(id)"
            >
              Topic
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              block
              class="mt-1"
              elevation="0"
              @click="redirectToCreateMaterial(id)"
            >
              Material
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block class="mt-1" elevation="0"> Assignment</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block class="mt-1" elevation="0"> Quiz</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <div id="title" v-for="topic in topics" v-bind:key="topic.id">
        <div class="mb-16">
          <div class="text-primary text-lg my-4">
            <div class="flex justify-between px-6">
              {{ topic.title }}
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn
                      block
                      class="mt-1"
                      elevation="0"
                      @click="redirectToUpdateTopic(topic.courseId, topic.id)"
                    >
                      Update
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn block class="mt-1" elevation="0" @click="deleteTopic(topic.id)"> Delete</v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div>
            <v-divider color="#06BBD3"></v-divider>
          </div>
          <div v-for="lessonMaterial in topic.lessonMaterials" v-bind:key="lessonMaterial.id">
            <v-hover v-slot="{ hover }">
              <div
                id="lesson-material"
                class="py-3 d-flex items-center justify-space-between px-6 cursor-pointer"
                :class="hover? `bg-light` : `bg-white`"
                @click="redirectToMaterialDetails(topic.courseId, lessonMaterial.id)"
              >
                <div class="d-flex items-center">
                  <div class="w-7 h-7 bg-secondary rounded-full text-base d-flex justify-center items-center mr-4">
                    <v-icon
                      small
                      color="white"
                    >
                      mdi-book-open
                    </v-icon>
                  </div>
                  <div class="truncate max-w-md">
                    {{ lessonMaterial.title }}
                  </div>
                </div>
                <div class="text-sm">
                  {{ dateSlicing(lessonMaterial.createdAt) }}
                </div>
              </div>
            </v-hover>
            <v-divider></v-divider>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>

import CourseStream from "./courseStream.vue";
import AppLayout from "../components/Layout/AppLayout.vue";
import {getTopicAPI, deleteTopicAPI} from "../../api/topic";

export default {
  layout: [AppLayout, CourseStream],
  props: {
    id: String
  },
  data() {
    return {
      topics: [],
    };
  },
  methods: {
    redirectToCreateTopic(id) {
      this.$inertia.visit(`/course/${id}/classwork/create`);
    },

    redirectToUpdateTopic(courseId, topicId) {
      this.$inertia.visit(`/course/${courseId}/classwork/update/${topicId}`);
    },

    redirectToCreateMaterial(id) {
      this.$inertia.visit(`/course/${id}/classwork/create/material`);
    },

    redirectToMaterialDetails(id, materialId) {
      this.$inertia.visit(`/course/${id}/classwork/material/${materialId}`);
    },

    async deleteTopic(topicId) {
      try {
        const response = await deleteTopicAPI(topicId);
        location.reload();
      } catch (error) {
      }
    },

    async getTopic(courseId) {
      try {
        const response = await getTopicAPI(courseId);
        this.topics = response.data;
        console.log(this.topics)
        for (let i = 0; i < this.topics.length; i++) {
          this.topics[i].push({courseId: this.$props.id})
        }
      } catch (error) {
      }
    },

    dateSlicing(givenDate) {
      let dateString;
      dateString = givenDate.slice(-1) === "Z"
        ? givenDate
        : `${givenDate}Z`;
      let date = new Date(dateString);
      date = date.toString().split(" ");
      return (
        date[0] + ", " + date[2] + " " + date[1] + " " + date[3]
      );
    },
  },
  created() {
    this.getTopic(parseInt(this.$props.id));
  }
};
</script>
