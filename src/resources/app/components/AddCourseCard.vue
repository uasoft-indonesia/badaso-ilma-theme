<template>
    <v-card
      class="mx-auto rounded-xl"
      width="253"
    >
        <div
            class="h-48 bg-light font-semibold text-primary flex flex-col items-center"
        >
            <div 
            id="add-course-tag"
            class="text-base mb-5 mt-12"
            >
            Add Course
            </div>
            
        </div>  
    </v-card>
</template>

<script>
  import 'vuetify/dist/vuetify.min.css'
  import vue from 'vue';
  import vuetify from 'vuetify';

  export default {
    data: () => ({
      show: false,
    }),
  }
</script>