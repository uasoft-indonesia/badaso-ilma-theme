<template>
  <v-app>
    <div class="flex justify-center items-center">
      <v-card
        id="join-card"
        elevation="2"
        width="400px"
        class="p-6"
      >
        <div
          id="title"
          class="text-base mb-2"
        >
          Enter Code
        </div>
        <div
          id="sub-title"
          class="text-s text-textGray mb-5"
        >
          Class code provided by your teacher
        </div>
        <div>
          <v-form
            v-model="isFormValid"
            ref="form"
          >
            <v-text-field
              id="code-form"
              label="Class Code"
              v-model="code"
              :rules="joinCodeRules"
              required
              outlined
            ></v-text-field>
          </v-form>
        </div>
        <div class="mt-3 flex justify-end">
          <v-btn
            id="join-btn"
            depressed
            color=primary
            type="submit"
            :disabled="!isFormValid"
          >
            Join
          </v-btn>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    code: '',
    isFormValid: false,
    joinCodeRules: [(v) => !!v || "Class code is required"]
  }),
};

</script>
