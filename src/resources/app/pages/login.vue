<template>
  <v-app
    ><v-card elevation="5" class="pa-6 ma-auto rounded-lg" width="400px">
      <v-form ref="form" v-model="valid">
        <div class="grid">
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

          <v-checkbox
            v-model="remember"
            label="Remember me?"
            id="login-checkbox"
          ></v-checkbox>

          <v-btn
            class="mb-4"
            @click="login"
            :disabled="!valid"
            width="100%"
            color="primary"
            depressed
            id="btn-login"
          >
            Login
          </v-btn>

          <v-btn
            @click="submit"
            width="100%"
            depressed
            color="light"
            id="btn-register"
          >
            Register
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
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      remember: false,
      backgroundImage: "../../assets/undraw_on_the_office_re_cxds.svg",
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async login() {
      this.validate();
      if (this.valid) {
        try {
          const res = await api.login({
            email: this.email,
            password: this.password,
          });
          if (res.errors === null) {
            this.$store.dispatch("SET_IS_AUTHENTICATED", true);
            this.$store.dispatch("SET_USER", res.data.user);
            localStorage.setItem("token", res.data.accessToken);
            window.location.href = "/";
          }
        } catch (e) {
          alert(e);
        }
      }
    },
  },
};
</script>

// ToDo (opal): redirect to home page, dont allow to enter if already
authenticated

<style>
#background-photo {
  position: absolute;
  bottom: 0;
  right: 0;
}

#btn-register {
  color: #06bbd3;
}
</style>
