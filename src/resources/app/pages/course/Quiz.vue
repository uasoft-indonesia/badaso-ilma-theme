<template>
  <CreationLayout
    :courseId="this.$props.courseId"
    :pageTitle="this.quiz.title"
    :topicTitle="this.quiz.topic.title"
    :contentId="this.$props.quizId"
    :teacherId="this.teacherId"
    contentType="quiz"
  >
    <div id="description" v-if="this.quiz.content" class="text-base mb-9">
      {{ this.quiz.content }}
    </div>
    <div id="start-time" class="text-base mb-5">
      Start Time: {{ countDate(this.quiz.start_time) }}
    </div>
    <div id="end-time" class="text-base mb-5">
      End Time: {{ countDate(this.quiz.end_time) }}
    </div>
    <div id="duration" class="text-base mb-5">
      Duration: {{ calculateDuration(this.quiz.duration) }}
    </div>
    <div class="w-full flex justify-center">
    <v-btn
        dark
        class="mb-2"
        color="primary"
        v-bind="attrs"
        v-on="on"
        id="create-button"
      >
        Start Attempt
      </v-btn>
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";
import { getQuizById } from "../../../api/course/quiz";
import { courseDetail } from "../../../api/course/detail";

export default {
  name: "Quiz",
  components: { CreationLayout },
  layout: [AppLayout],
  props: {
    courseId: String,
    quizId: String,
  },
  data() {
    return {
      quiz: {
        topic: {
          title: "Test"
        },
        title: "Quiz #1",
        content: "TEST",
        start_time: "2022-05-17T06:45:10.163Z",
        end_time: "2022-05-17T06:45:10.163Z",
        duration: 14460
      },
      teacherId: String,
    }
  },
  methods: {
    async getCourseQuiz() {
      try {
        let response = await getQuizById(this.$props.quizId);
        if (response.data.topic === null) {
          response.data.topic = { title: "" };
        }
        this.quiz = response.data;
      } catch (error) {
        await this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
      }
    },
    async getTeacher(courseId) {
      try {
        const response = await courseDetail(courseId);
        if (response.data.createdBy){
          this.teacherId = response.data.createdBy
        }
      } catch (error) {
        await this.$store.dispatch("OPEN_SNACKBAR", "Error getting data");
      }
    },
    calculateDuration(seconds) {
      const hours = Math.floor(seconds / 3600)
      const remainder = seconds % 3600
      const minutes = Math.floor(remainder / 60)
      return `${hours && hours + " Hours"} ${minutes && minutes + " Minutes"}`
    },
    countDate(givenDate) {
      const date = new Date(givenDate)
      return `${date.toDateString()} ${date.toLocaleTimeString()}`
    },
  },
  created() {
    this.getCourseQuiz();
    this.getTeacher(this.$props.courseId);
  },
}
</script>
