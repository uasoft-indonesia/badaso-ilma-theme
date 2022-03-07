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
    
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>