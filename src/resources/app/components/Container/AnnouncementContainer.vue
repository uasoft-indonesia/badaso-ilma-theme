<template>
  <div id="container">
    <CreateAnnouncement/>
    <AnnouncementCard/>
  </div>
</template>

<script>
import CreateAnnouncement from "../CreateAnnouncement";
import AnnouncementCard from "../AnnouncementCard";

export default {
  name: "AnnouncementContainer",
  components: {AnnouncementCard, CreateAnnouncement}
}
</script>

<style scoped>

</style>
