<template>
  <v-card
    class="mx-auto my-3"
    width="650"
    outlined
  >
    <div id="announcement">
      <AnnouncementContent
        :name=this.$props.createdBy
        :date="this.$props.date"
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
    <div>
      <v-divider></v-divider>
      <!--@here-->
      <div>
        <v-form
          v-model="isFormValid"
          ref="form"
          class="mx-6 my-4"
        >
          <div>
            <v-textarea
              outlined
              v-model="content"
              :rules="commentRules.concat(lengthRules)"
              :counter="65535"
              placeholder="Comment here..."
            ></v-textarea>
          </div>          
        </v-form>
        <v-btn
          id="post-button"
          depressed
          color=primary
          @click="postComment"
          :disabled="!isFormValid"
        >
          Post
        </v-btn>
      </div>
    </div>
  </v-card>

</template>

<script>
import AnnouncementContent from "./AnnouncementContent";
import {CreateComment} from "../../api/announcement/comment/CreateComment";

const courseId = window.location.href.split("/")[4];

export default {
  name: "AnnouncementCard",
  props: [
    "id",
    "createdBy",
    "content",
    "date",
    "comments",
    "getAnnouncement",
  ],
  components: {AnnouncementContent},
  data() {
    return {
      isFormValid: false,
      data: '',
      comments: this.$props.comments,
      commentRules: [(v) => (!!v || "Comment cannot be empty")],
      lengthRules: [(v) => (v.length <= 65535 || "Characters are off limit")],
      snackbar: {
        isVisible: false,
        text: "",
      },
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },

    async postComment() {
      this.validate();
      if (this.isFormValid) {
        const {data, error, errorMessage} = await CreateComment({
          courseId: parseInt(courseId),
          content: this.content,
        });

        if (error) {
          this.showSnackbar(errorMessage);
        } else {
          this.$refs.form.reset();
          this.$props.getAnnouncement();
        }
      }
    },
    showSnackbar(text) {
      this.snackbar.text = text;
      this.snackbar.isVisible = true;
    },
  }
//bikin function buat POST, didalem function POST jalanin function GET, biar langsung fetch ulang
//bikin function buat GET, data response gantiin si comment
}

</script>
