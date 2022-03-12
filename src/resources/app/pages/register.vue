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
            :disabled="!valid || loading"
            width="100%"
            depressed
            color="primary"
            id="btn-register"
          >
            <span v-if="!loading">Register</span>
            <span v-else>
              <v-icon dark class="animate-spin" id="loading-icon">
                mdi-loading
              </v-icon>
            </span>
          </v-btn>

          <v-btn
            class="mt-4"
            @click="redirect"
            width="100%"
            depressed
            color="light"
            id="btn-login"
          >
            Login
          </v-btn>
        </div>
      </v-form>
    </v-card>
    <img :src="backgroundImage" id="background-photo" alt="background" />
  </v-app>
</template>

<script>
import api from "../../api/auth";
import NotAuthenticated from "../components/Layout/NotAuthenticated.vue";

export default {
  layout: [NotAuthenticated],
  data() {
    return {
      loading: false,
      valid: false,
      fullname: "",
      fullNameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      username: "",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 4) || "Username must be at least 4 characters long",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      passwordConfirmation: "",
      passwordConfirmationRules: [
        (v) => !!v || "Password is required",
        () => {
          if (this.password === this.passwordConfirmation) {
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
        this.loading = true;
        try {
          const res = await api.register({
            name: this.fullname,
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          });
          this.$vToastify.success(
            "Registration successfull, please log in to the application"
          );
          this.redirect();
        } catch (e) {
          console.log(e);
          this.$vToastify.error("Error while registering account");
        }
        this.loading = false;
      }
    },
    redirect() {
      this.$inertia.visit("/login");
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

#btn-login {
  color: #06bbd3;
}
</style>
