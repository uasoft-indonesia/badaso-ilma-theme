<template>
  <v-card
    class="mx-auto my-3"
    width="650"
    outlined
  >
    <div id="announcement">
      <AnnouncementContent
        :name="'User'"
        :date="'19 January 2022'"
        :content="'Test Content'"
      />
    </div>

    <!--announcement comments-->
    <div
      id="comments"
      v-if="comments.length !== 0"
      v-for="comment in comments"
      v-bind:key="comment.id"
    >
      <v-divider></v-divider>
      <AnnouncementContent
        :name="comment.name"
        :date="comment.date"
        :content="comment.content"
      />
    </div>
  </v-card>

</template>

<script>
import AnnouncementContent from "./AnnouncementContent";

export default {
  name: "AnnouncementCard",
  components: {AnnouncementContent},
  data() {
    return {
      comments: []
    }
  }
}
</script>
