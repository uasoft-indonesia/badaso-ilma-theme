<template>
  <v-container>
    <v-row>
      <v-col md="12" class="mb-4">
        <v-card class="rounded-lg" elevation="0" color="primary">
          <v-card-text id="course-title"> Computer Networks </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
        v-for="tab in tabs"
        sm="2"
        :key="tab.name"
        class="flex justify-center"
      >
        <v-btn
          class="mt-1"
          depressed
          :color="activeTab == tab.name ? 'light' : 'white'"
          @click="redirectTab(tab.href)"
        >
          {{ tab.name }}
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col v-if="activeTab == 'Main Page'" md="2" class="mt-4">
        <v-card outlined class="rounded-lg">
          <v-card-text>
            <h2 id="code-title">Class code</h2>
            <div class="font-bold text-lg" id="class-code">R00M00</div>
            <v-btn
              @click="copyCode('R00M00')"
              id="copy-btn"
              class="mt-1"
              elevation="0"
              outlined
            >
              Copy
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="10">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppLayout from "../components/Layout/AppLayout.vue";
export default {
  layout: [AppLayout],
  data() {
    return {
      tabs: [
        {
          name: "Announcements",
          href: "",
        },
        {
          name: "Classwork",
          href: "/classwork",
        },
        {
          name: "People",
          href: "/people",
        },
      ],
      activeTab: "Announcements",
    };
  },
  methods: {
    async copyCode(code) {
      try {
        await navigator.clipboard.writeText(code);
        alert("Copied");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    redirectTab(href) {
      this.$inertia.visit("/course/1" + href);
    },
    getActiveTab() {
      const pathname = window.location.pathname.split("/");
      console.log(pathname);
      if (pathname.length == 3) {
        this.activeTab = "Main Page";
      } else if (pathname.length >= 4 && pathname[3] == "people") {
        this.activeTab = "People";
      } else if (pathname.length >= 4 && pathname[3] == "classwork") {
        this.activeTab = "Classwork";
      }
    },
  },
  mounted() {
    this.getActiveTab();
  },
};
</script>
<style>
#course-title {
  color: white;
  font-size: 32px;
  margin-top: 5rem;
}
.active-tab {
  background-color: #e6f8fb;
  color: #06bbd3;
}
.non-active-tab {
  background-color: white;
}
</style>
