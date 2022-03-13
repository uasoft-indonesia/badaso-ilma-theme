<template>
  <v-card
    class="mx-auto rounded-3xl"
    width="253"
    @click="actionRedirectToCoursePage(courseId)"
  >
    <div class="bg-primary h-24 font-semibold text-base text-slate-50">
      <div class="flex flex-row">
        <div class="pl-5 pt-5 text-base" id="course-name">
          {{ courseName }}
        </div>
        <button class="flex flex-col items-end space-x-0 space-y-0 pr-1 pt-5">
          <div class="rotate-90 font-bold">...</div>
        </button>
      </div>

      <div class="flex flex-row-reverse">
        <v-avatar class="bg-gray z-0 mt-5 mr-5" size="60"></v-avatar>
      </div>
    </div>

    <div class="m-3">
      <div class="font-normal text-xs" id="room-tag">Room</div>
      <div class="font-medium text-sm mb-3" id="classroom">
        {{ roomNum }}
      </div>
      <div class="font-normal text-sm" id="teacher-name">
        {{ teacherName }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["courseId", "courseName", "roomNum", "teacherName"],
  methods: {
    actionRedirectToCoursePage(id) {
      window.location.assign(`/course/${id}`);
    },
  },
};
</script>
