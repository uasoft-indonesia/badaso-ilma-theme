<template>
  <div id="container">
    <CreateAnnouncement
      :getAnnouncement="this.getAnnouncements"
      :courseId = "this.$props.courseId"
<<<<<<< HEAD
      
=======

>>>>>>> 833e7e5bd0dd7f24bf3c0c67091b2dc681e85fe0
    />
    <div v-for="announcement in announcements" v-bind:key="announcement.id">
      <AnnouncementCard
        :content="announcement.content"
        :author="announcement.author"
        :date="announcement.createdAt"
        :id="announcement.id"
        :comments="announcement.comments"
        :authorId="announcement.createdBy"
      />
    </div>
  </div>
</template>

<script>
import AnnouncementCard from "../AnnouncementCard";
<<<<<<< HEAD
import api from "../../../api/announcement/GetAnnouncements";
=======
import CreateAnnouncement from "../CreateAnnouncement";
import { getAnnouncementsAPI } from "../../../api/announcement";
>>>>>>> 833e7e5bd0dd7f24bf3c0c67091b2dc681e85fe0

export default {
  name: "AnnouncementContainer",
  data() {
    return {
      announcements: []
    }
  },
  props: [
    "courseId",
  ],
  methods: {
    async getAnnouncements(courseId) {
      try {
        const response = await getAnnouncementsAPI(courseId);
        this.announcements = response.data;
      } catch (error) {
      }
    },
  },
  created() {
    this.getAnnouncements(this.$props.courseId);
  },
  components: {AnnouncementCard, CreateAnnouncement}
}
</script>

<style scoped>

</style>
