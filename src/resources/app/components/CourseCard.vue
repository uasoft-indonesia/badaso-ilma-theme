<template>
    <v-card
      class="mx-auto rounded-xl"
      max-width="253"
    >
      <div
        class="bg-primary h-24 font-semibold text-base text-slate-50"
      >
        <div 
          class="pl-5 pt-5"
          id="course-name"
        >Software Engineering</div>
      </div>
      
      <div class="m-5">

        <div 
          class="font-normal text-xs"
          id="room-tag"
        >
          Room
        </div>
        <div 
          class="font-semibold text-sm mb-3"
          id="classroom"
        >
          1002-A
        </div>
        <div 
          class="font-normal text-sm"
          id="teacher-name"
        >
          Pak Nofaldi Atmam
        </div>
      </div>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>
