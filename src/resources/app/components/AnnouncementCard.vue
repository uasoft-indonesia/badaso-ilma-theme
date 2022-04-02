<template>
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
      />
    </div>

    <!--announcement comments-->
    <div
      id="comments"
      v-if="dataComments !== 0"
      v-for="comment in dataComments"
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
        <v-row no-gutters>
          <v-col
            cols="19"
          >
            <v-form
              v-model="isFormValid"
              ref="form"
              class="mx-6 my-4"
            >
              <div>
                <v-textarea
                  rows="1"
                  outlined
                  v-model="fieldContent"
                  :rules="commentRules.concat(lengthRules)"
                  :counter="65535"
                  placeholder="Comment here..."
                ></v-textarea>
              </div>          
            </v-form>
          </v-col>
          <v-col
            cols="1"
          >
            <div class="my-6">
              <v-btn
                icon
                id="post-button"
                depressed
                color=primary
                @click="postComment"
                :disabled="!isFormValid"
              >
                <v-icon>
                  mdi-send
                </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
import AnnouncementContent from "./AnnouncementContent";
import {CreateComment} from "../../api/announcement/comment/CreateComment";

const course = window.location.href.split("/")[4];

export default {
  name: "AnnouncementCard",
  props: [
    "id",
    "author",
    "authorId",
    "content",
    "date",
    "comments",
    "getAnnouncement",
    "courseId",
  ],
  components: {AnnouncementContent},
  data() {
    return {
      isFormValid: false,
      fieldContent: '',
      dataComments: this.$props.comments,
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
          announcementId: parseInt(this.$props.id),
          content: this.fieldContent,
        });

        if (error) {
          this.showSnackbar(errorMessage);
        } else {
          this.$refs.form.reset();
          this.$props.getAnnouncement(this.$props.courseId);
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
