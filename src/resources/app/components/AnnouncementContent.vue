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
              :class="item.class"
              @click="isEditing=true"
            >{{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div
      id="content"
      class="mt-4"
      v-if="!isEditing"
    >
      {{ content }}
    </div>
    <div
      id="edit-form"
      v-if="isEditing"
    >
      <v-form
        v-model="isFormValid"
        ref="form"
        class="mx-6 my-4"
      >
        <div>
          <v-textarea
            outlined
            v-model="announcement"
            :rules="announceRules.concat(lengthRules)"
            :counter="65535"
            label="Announcement"
            placeholder="Announcement for everyone..."
          ></v-textarea>
        </div>
        <div class="text-right">
          <v-btn
            depressed
            color=light
            @click="isEditing = false; announcement = content"
            class="mr-4"
          >
            <div
              id="cancel-button"
              class="text-primary"
            >
              Cancel
            </div>
          </v-btn>
          <v-btn
            id="post-button"
            depressed
            color=primary
            @click="editAnnouncement"
            :disabled="!isFormValid"
          >
            Post
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import {EditAnnouncement} from "../../api/announcement/EditAnnouncement";

export default {
//tambahin props baru buat comment, tambahin type biar bisa bedain
  name: "AnnouncementContent",
  props: [
    "id",
    "name",
    "date",
    "content",
  ],
  data() {
    return {
      announcementDate: this.dateSlicing(),
      announcement: this.$props.content,
      isEditing: false,
      isFormValid: false,
      announceRules: [(v) => (!!v || "Announcement cannot be empty")],
      lengthRules: [(v) => (v.length <= 65535 || "Characters are off limit")],
      items: [{
        title: 'Edit',
        action: "isEditing=True",
        class: 'w-28 text-sm',
      }, {
        title: 'Delete',
        action: '',
        class: 'w-28 text-sm text-error',
      }]
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
//kalau lu tau dia annoucument, manggil const 140
//kalau lu tau dia comment, nembak ke API comment
    async editAnnouncement(){
      if (this.isFormValid) {
        //tambahin if
        const {data, error, errorMessage} = await EditAnnouncement({
          content: this.announcement,
        }, this.$props.id);

        if (error) {
          this.showSnackbar(errorMessage);
        } else {
          this.isEditing = false;
          this.$props.content = this.announcement;
        }
      }
    },

    dateSlicing() {
      let date = new Date(this.$props.date);
      date = date.toString().split(" ");
      return date[0] + ", " + date[2] + " " + date[1] + " " + date[3] + " " + date[4]
    }
  }
}
</script>
