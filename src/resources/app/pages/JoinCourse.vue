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
        <v-form
          v-model="isFormValid"
          ref="form"
        >
          <div>
            <v-text-field
              id="code-form"
              label="Class Code"
              v-model="code"
              :rules="joinCodeRules"
              required
              outlined
            ></v-text-field>
          </div>
          <div class="mt-3 flex justify-end">
            <v-btn
              id="join-btn"
              depressed
              color=primary
              @click="submit"
              :disabled="!isFormValid"
            >
              Join
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import api from "../../api/joinCourse";


export default {
  components: {},
  data: () => ({
    code: '',
    isFormValid: false,
    joinCodeRules: [(v) => !!v || "Class code is required"]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async submit() {
      this.validate();
      if (this.isFormValid) {
        try {
          let res = await api.joinCourse({
            code: this.code
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
};

</script>
