<template>
  <v-card
    class="mx-auto my-3"
    width="650"
    outlined
  >
    <div id="announcement">
      <AnnouncementContent
        :name=this.$props.createdBy
        :date="'19 January 2022'"
        :content=this.$props.content
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
  props: [
    "createdBy",
    "content",
    "dateCreated",
  ],
  components: {AnnouncementContent},
  data() {
    return {
      comments: []
    }
  }
}
</script>
