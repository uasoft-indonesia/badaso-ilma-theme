<template>
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
              @click="submit"
              :disabled="!isFormValid"
            >
              Post
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CreateAnnouncement",
  data() {
    return {
      announcement: '',
      startWriting: false,
      isFormValid: false,
      announceRules: [(v) => !!v || "Announcement cannot be empty"]
    }
  },
}
</script>

<style scoped>

</style>
