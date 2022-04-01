<template>
  <div id="container">
    <CreateAnnouncement
<<<<<<< HEAD
      :get-announcement="this.getAnnouncements"
=======
      :getAnnouncement="this.getAnnouncements()"
>>>>>>> b150f07ccb46d7c9b3093e95060d8204830c5234
    />
    <div v-for="announcement in announcements" v-bind:key="announcement.id">
      <AnnouncementCard
        :content="announcement.content"
<<<<<<< HEAD
        :author="announcement.author"
        :date="announcement.createdAt"
        :id="announcement.id"
        :author-id="announcement.createdBy"
=======
        :created-by="announcement.author"
        :date="announcement.createdAt"
        :id="announcement.id"
>>>>>>> b150f07ccb46d7c9b3093e95060d8204830c5234
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
