<template>
  <v-card 
    flat
  >
    <div class="d-flex">
      <v-avatar class="bg-primary mr-4" id="avatar" size="40"></v-avatar>
      <div>
        <div id="author">
          {{ name }}
        </div>
        <div id="date" class="text-sm text-textGray">
          {{ countDate(date) }}
        </div>
      </div>
    </div>
    <div id="content" class="ms-14 mt-1">
      {{ content }}
    </div>
    <v-divider id="divider" color="#CECECE" class="my-2"></v-divider>
  </v-card>
</template>

<script>
import { dateSlicing } from "../../api/utils/dateSlicing";

export default {
  name: "ListComment",
  props: [
    "name",
    "date",
    "content",
  ],
  methods: {
    countDate(givenDate) {
      return dateSlicing(givenDate);
    },
  }
}
</script>
