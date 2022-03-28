<template>
  <div>
    <v-snackbar v-model="snackbar.isVisible" :timeout="3000" top>
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar.isVisible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-hover
      v-slot="{ hover }"
      true
    >
      <v-card
        :elevation="hover && !startWriting ? 5 : 0"
        class="mx-auto my-3"
        width="650"
        outlined
      >
        <div
          id="initial-form"
          v-on:click="startWriting = true"
          v-if="!startWriting"
          class="cursor-pointer px-6 py-4"
        >
          <v-avatar class="bg-primary mr-4" id="avatar" size="48"></v-avatar>
          <span
            id="initial-text"
            class="text-textGray"
          >
          Write Something
        </span>
        </div>
        <div
          id="true-form"
          v-if="startWriting"
        >
          <v-form
            v-model="isFormValid"
            ref="form"
            class="mx-6 my-4"
          >
            <div>
              <v-textarea
                outlined
                v-model="announcement"
                :rules="announceRules"
                :counter="65535"
                label="Announcement"
                placeholder="Announcement for everyone..."
              ></v-textarea>
            </div>
            <div class="text-right">
              <v-btn
                depressed
                color=light
                @click="startWriting = false"
                class="mr-4"
              >
                <div
                  id="cancel-button"
                  class="text-primary"
                >
                  Cancel
                </div>
              </v-btn>
              <v-btn
                id="post-button"
                depressed
                color=primary
                @click="postAnnouncement"
                :disabled="!isFormValid"
              >
                Post
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import {CreateAnnouncement} from "../../api/announcement/CreateAnnouncement";

const courseId = window.location.href.split("/")[4];

export default {
  name: "CreateAnnouncement",
  data() {
    return {
      announcement: '',
      startWriting: false,
      isFormValid: false,
      announceRules: [(v) => (!!v || "Announcement cannot be empty")
        && (v.length <= 65535 || "Characters are off limit")],
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

    async postAnnouncement() {
      this.validate();
      if (this.isFormValid) {
        const {data, error, errorMessage} = await CreateAnnouncement({
          courseId: parseInt(courseId),
          content: this.announcement,
        });

        if (error) {
          this.showSnackbar(errorMessage);
        }
      }
    },

    showSnackbar(text) {
      this.snackbar.text = text;
      this.snackbar.isVisible = true;
    },
  }
}
</script>

<style scoped>

</style>
