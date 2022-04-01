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
<<<<<<< HEAD
  components: {AnnouncementContainer},
  beforeCreate() {
    if (!this.$store.state.isAuthenticated) {
      window.location.assign("/login");
    }
  }
=======
  components: {AnnouncementContainer}
>>>>>>> b150f07ccb46d7c9b3093e95060d8204830c5234
}
</script>
