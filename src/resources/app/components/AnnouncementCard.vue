<template>
  <v-card
    class="mx-auto my-3"
    width="650"
    outlined
  >
    <div id="announcement">
      <AnnouncementContent
<<<<<<< HEAD
        :name=this.$props.author
        :date="this.$props.date"
        :content=this.$props.content
        :id="this.$props.id"
        :author-id="this.$props.authorId"
=======
        :name=this.$props.createdBy
        :date="this.$props.date"
        :content=this.$props.content
        :id="this.$props.id"
>>>>>>> b150f07ccb46d7c9b3093e95060d8204830c5234
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
<<<<<<< HEAD
    "author",
    "authorId",
=======
    "createdBy",
>>>>>>> b150f07ccb46d7c9b3093e95060d8204830c5234
    "content",
    "date",
  ],
  components: {AnnouncementContent},
  data() {
    return {
      comments: [],
    }
  },
}

</script>
