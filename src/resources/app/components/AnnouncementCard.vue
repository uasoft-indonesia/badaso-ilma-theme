<template>
  <v-card
    class="mx-auto my-3"
    width="650"
    outlined
  >
    <div id="announcement">
      <AnnouncementContent
        :name=this.$props.createdBy
        :date="this.$props.dateCreated !== this.$props.dateUpdated ? this.$props.dateUpdated : this.$props.dateCreated"
        :content=this.$props.content
        :id="this.$props.id"
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
        :id="comment.id"
      />
    </div>
  </v-card>

</template>

<script>
import AnnouncementContent from "./AnnouncementContent";

export default {
  name: "AnnouncementCard",
  props: [
    "id",
    "createdBy",
    "content",
    "dateCreated",
    "dateUpdated",
  ],
  components: {AnnouncementContent},
  data() {
    return {
      comments: [],
    }
  },
}

</script>
