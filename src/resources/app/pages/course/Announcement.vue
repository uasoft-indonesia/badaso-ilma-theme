<template>
  <div id="announcement-container">
    <AnnouncementContainer/>
  </div>
</template>
<script>
import AnnouncementContainer from "../../components/Container/AnnouncementContainer";
import CourseStream from "../courseStream";
import AppLayout from "../../components/Layout/AppLayout";

export default {
  layout: [AppLayout, CourseStream],
  components: {AnnouncementContainer},
  beforeCreate() {
    if (!this.$store.state.isAuthenticated) {
      window.location.assign("/login");
    }
  }
}
</script>
