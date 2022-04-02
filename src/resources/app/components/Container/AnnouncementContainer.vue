<template>
  <div id="container">
    <CreateAnnouncement
      :get-announcement="this.getAnnouncements"
    />
    <div v-for="announcement in announcements" v-bind:key="announcement.id">
      <AnnouncementCard
        :content="announcement.content"
        :author="announcement.author"
        :date="announcement.createdAt"
        :id="announcement.id"
        :author-id="announcement.createdBy"
      />
    </div>
  </div>
</template>

<script>
import CreateAnnouncement from "../CreateAnnouncement";
import AnnouncementCard from "../AnnouncementCard";
import api from "../../../api/announcement/GetAnnouncements";

const courseId = window.location.href.split("/")[4];

export default {
  name: "AnnouncementContainer",
  data() {
    return {
      announcements: []
    }
  },
  methods: {
    async getAnnouncements() {
      try {
        const response = await api.GetAnnouncements(courseId);
        this.announcements = response.data;
      } catch (error) {
      }
    },
  },
  created() {
    this.getAnnouncements();
  },
  components: {AnnouncementCard, CreateAnnouncement}
}
</script>

<style scoped>

</style>
