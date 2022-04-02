<template>
  <div
    v-if="!isDeleted"
  >
    <v-card
      class="mx-auto my-3"
      width="650"
      outlined
    >
      <div id="announcement">
        <AnnouncementContent
          :name=this.$props.author
          :date="this.$props.date"
          :content="this.$props.content"
          :id="this.$props.id"
          :author-id="this.$props.authorId"
          :removeCard="this.removeCard"
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
  </div>
</template>

<script>
import AnnouncementContent from "./AnnouncementContent";

export default {
  name: "AnnouncementCard",
  props: [
    "id",
    "author",
    "authorId",
    "content",
    "date",
  ],
  components: {AnnouncementContent},
  data() {
    return {
      comments: [],
      isDeleted: false,
    }
  },

  methods: {
    removeCard() {
      this.isDeleted = true
    }
  }
}

</script>
