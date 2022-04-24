<template>
  <v-card 
    flat
  >
    <div class="d-flex">
      <v-avatar class="bg-primary mr-4" id="avatar" size="40"></v-avatar>
      <div>
        <div id="author">
          {{ name }}
        </div>
        <div id="date" class="text-sm text-textGray">
          {{ commentDate }}
        </div>
      </div>
    </div>
    <div id="content" class="ms-14 mt-1">
      {{ content }}
    </div>
    <v-divider id="divider" color="#CECECE" class="my-2"></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "ListComment",
  props: [
    "name",
    "date",
    "content",
  ],
  data() {
    return {
      commentDate: this.dateSlicing(),
    }
  },
  methods: {
    dateSlicing() {
      let datestring;
      datestring = this.$props.date;
      let date = new Date(datestring);
      date = date.toString().split(" ");
      return (
        date[0] + ", " + date[2] + " " + date[1] + " " + date[3] + " " + date[4]
      );
    },
  },
}
</script>
