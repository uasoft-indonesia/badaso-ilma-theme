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
          <v-text-field
            id="code-form"
            label="Class Code"
            outlined
          ></v-text-field>
        </div>
        <div class="mt-3 flex justify-end">
          <v-btn
            id="join-btn"
            depressed
            color=primary
            :disabled=false
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
  }),
};

</script>
