<template>
  <v-card 
    flat
  >
    <div class="d-flex justify-between">
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
      <v-menu id="menu" v-if="this.isCurrentUserTheAuthorOrTeacher()" bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item id="editForm" link @click="isEditing = true">
            <v-list-item-title class="w-28 text-sm"> Edit </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div id="content" class="ms-14 mt-1 mr-10" v-if="!isEditing">
        {{ content }}
    </div>
    <div id="edit-form" v-if="isEditing">
      <v-form v-model="isFormValid" ref="form" class="mx-6 my-4">
        <div>
          <v-textarea
            outlined
            v-model="comment"
            :rules="commentRules.concat(lengthRules)"
            :counter="65535"
          ></v-textarea>
        </div>
        <div class="text-right">
          <v-btn
            depressed
            color="light"
            @click="
              isEditing = false;
              comment = content;
            "
            class="mr-4"
          >
            <div id="cancel-button" class="text-primary">Cancel</div>
          </v-btn>
          <v-btn
            depressed
            color="primary"
            @click="editComment"
            :disabled="!isFormValid"
          >
            Post
          </v-btn>
        </div>
      </v-form>
    </div>
    <v-divider id="divider" color="#CECECE" class="my-2"></v-divider>
  </v-card>
</template>

<script>
import { dateSlicing } from "../../api/utils/dateSlicing";
import { editMaterialComment } from "../../api/course/materialComment";

export default {
  name: "ListComment",
  props: [
    "name",
    "date",
    "content",
    "contentId",
    "authorId",
    "teacherId",
  ],
  data() {
    return {
      isFormValid: false,
      isEditing: false,
      comment: this.$props.content,
      commentRules: [(v) => !!v || "Comment cannot be empty"],
      lengthRules: [(v) => v.length <= 65535 || "Characters are off limit"],
    }
  },
  methods: {
    countDate(givenDate) {
      return dateSlicing(givenDate);
    },
    isCurrentUserTheAuthorOrTeacher() {
      const userId = (this.$store.state.user.id === this.$props.authorId);
      const teacherId = (this.$store.state.user.id === this.$props.teacherId);
      return (userId || teacherId);
    },
    async editComment() {
      if (this.isFormValid) {
        const { data, error, errorMessage } = await editMaterialComment(
          {
            content: this.comment,
          },
          this.$props.contentId
        );

        if (error) {
          await this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
        } else {
          this.isEditing = false;
          this.$props.content = this.comment;
        }
      }
    },
  }
}
</script>
