<template>
  <div id="container">
    <CreateAnnouncement
      :getAnnouncement="this.getAnnouncements(this.$props.courseId)"
      :courseId = "this.$props.courseId"
    />
    <div v-for="announcement in announcements" v-bind:key="announcement.id">
      <AnnouncementCard
        :content="announcement.content"
        :created-by="announcement.author"
        :date="announcement.createdAt"
        :id="announcement.id"
        :comments="announcement.comments"
      />
    </div>
  </div>
</template>

<script>
import CreateAnnouncement from "../CreateAnnouncement";
import AnnouncementCard from "../AnnouncementCard";
import api from "../../../api/announcement/GetAnnouncements";

const course = window.location.href.split("/")[4];

export default {
  name: "AnnouncementContainer",
  data() {
    return {
      announcements: []
    }
  },
  props:[
  "courseId",
  ],
  methods: {
    async getAnnouncements(courseId) {
      try {
        const response = await api.GetAnnouncements(courseId);
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
