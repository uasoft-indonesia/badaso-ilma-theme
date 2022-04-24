<template>
  <div id="comment">
    <v-row id="comment-form">
      <v-col cols="19">
        <v-form
          ref="form"
          v-model="isFormValid"
          class="mx-6 my-4"
        >
          <v-textarea
            outlined
            rows = "1"
            v-model="comment"
            :rules="commentRules.concat(lengthRules)"
            :counter="65535"
            placeholder="Comment here..."
          ></v-textarea>
        </v-form>
      </v-col>
      <v-col cols="1">
        <v-btn
          icon
          id="post-button"
          class="my-6"
          depressed
          color=primary
          @click="postComment"
          :disabled="!isFormValid"
        >
          <v-icon>
            mdi-send
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { createMaterialComment } from "../../api/course/materialComment";

export default {
  name: "CreateMaterialComment",
  props: {
    materialId: String,
  },
  data() {
    return {
      comment: "",
      isFormValid: false,
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
    showSnackbar(text) {
      this.snackbar.text = text;
      this.snackbar.isVisible = true;
    },
    async postComment() {
      this.validate();
        if (this.isFormValid) {
          const {error, errorMessage} = await createMaterialComment({
            materialId: parseInt(this.$props.materialId),
            content: this.comment,
          });

          if (error) {
            this.showSnackbar(errorMessage);
          } else {
            this.$refs.form.reset();
          }
        }
    },
  },
}
</script>
