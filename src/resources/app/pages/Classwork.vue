<template>
  <v-container>
    <div class="my-10 mx-10">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
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
            <v-btn block class="mt-1" elevation="0"> Assignment </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block class="mt-1" elevation="0"> Quiz </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <div id="title" v-for="topic in topics" v-bind:key="topic.id">
        <v-row class="text-primary text-lg my-4">
          <div class="flex justify-between">
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
                <v-btn block class="mt-1" elevation="0" @click="deleteTopic(topic.id)"> Delete </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
          </div>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>

import CourseStream from "./courseStream.vue";
import AppLayout from "../components/Layout/AppLayout.vue";
import { getTopicAPI, deleteTopicAPI } from "../../api/topic";

export default {
  layout: [AppLayout, CourseStream],
  props: {
    id: String
  },
  data() {
    return {
      topics: [
      ],
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
        for (let i=0; i<topics.length; i++) {
          topics[i].push({courseId: this.$props.id})
        }
      } catch (error) {
      }
    }

  },
  mounted() {
    this.getData(this.$props.id);
  },
  created() {
    this.getTopic(parseInt(this.$props.id));
  }
};
</script>
