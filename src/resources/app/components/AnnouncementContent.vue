<template>
  <div class="px-6 py-4">
    <div class="d-flex justify-between">
      <div class="d-flex">
        <v-avatar class="bg-primary mr-4" id="avatar" size="48"></v-avatar>
        <div>
          <div id="author">
            {{ name }}
          </div>
          <div
            id="date"
            class="text-sm text-textGray">
            {{ announcementDate }}
          </div>
        </div>
      </div>
      <v-menu
        id="menu"
        bottom
        right
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            link
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title
              class="w-28 text-sm"
            >{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div
      id="content"
      class="mt-4">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AnnouncementContent",
  props: [
    "name",
    "date",
    "content",
  ],
  data (){
    return {
      announcementDate: this.dateSlicing(),
      items:[{
        title: 'Edit',
        link: ''
      },{
        title : 'Delete',
        link: '',
      }]
    }
  },
  methods: {
    dateSlicing(){
      let date = new Date (this.$props.date);
      date = date.toString().split(" ");
      return date[0] + ", " + date[2] + " " + date[1] + " " + date[3] + " " + date[4]
    }
  }
}
</script>
