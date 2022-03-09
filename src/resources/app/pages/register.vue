<template>
  <v-app>
    <v-card elevation="5" class="pa-6 ma-auto rounded-lg" width="400px">
      <v-form ref="form" v-model="valid">
        <div class="grid">
          <v-text-field
            v-model="fullname"
            :rules="fullNameRules"
            label="Fullname"
            required
            outlined
            id="input-fullname"
          ></v-text-field>

          <v-text-field
            v-model="username"
            label="Username"
            required
            outlined
            :rules="usernameRules"
            id="input-username"
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
            id="input-email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
            outlined
            id="input-password"
          ></v-text-field>

          <v-text-field
            v-model="passwordConfirmation"
            :rules="passwordConfirmationRules"
            label="Password Confirmation"
            type="password"
            required
            outlined
            id="input-password-confirmation"
          ></v-text-field>

          <v-btn
            @click="submit"
            :disabled="!valid"
            width="100%"
            depressed
            color="primary"
            id="btn-register"
          >
            Register
          </v-btn>

          <v-btn
            class="mt-4"
            @click="validate"
            width="100%"
            depressed
            id="btn-login"
          >
            Login
          </v-btn>
        </div>
      </v-form>
    </v-card>
    <img :src="backgroundImage" id="background-photo" />
  </v-app>
</template>

<script>
import api from "../../api/auth";

export default {
  data() {
    return {
      valid: true,
      fullname: "",
      fullNameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      username: "",
      usernameRules: [(v) => !!v || "Username is required"],
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      passwordConfirmation: "",
      passwordConfirmationRules: [
        (v) => !!v || "Password is required",
        (v) => {
          if (this.password === v) {
            return true;
          } else {
            return "Passwords does not match.";
          }
        },
      ],
      backgroundImage: "../../assets/undraw_on_the_office_re_cxds.svg",
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async submit() {
      this.validate();
      if (this.valid) {
        try {
          res = await api.register({
            name: this.fullname,
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          });
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>

<style>
#background-photo {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
