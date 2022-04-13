<template>
  <CreationLayout
    courseId="2"
    pageTitle="Create Material"
  >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          elevation="0"
          class="mb-6"
          id="drop-down"
        >
          Topic
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-form ref="form">
      <v-text-field
        id="title-form"
        label="Title"
        outlined
      ></v-text-field>
      <v-textarea
        id="description"
        label="Description"
        placeholder="This material is about..."
        outlined
      ></v-textarea>
    </v-form>
    <div class="text-right mt-7">
      <v-btn
        id="cancel-button"
        color="error"
        elevation="0"
      >
        Cancel
      </v-btn>
      <v-btn
        id="create-button"
        class="ml-4"
        color="primary"
        elevation="0"
      >
        Create
      </v-btn>
    </div>
  </CreationLayout>
</template>

<script>
import AppLayout from "../../components/Layout/AppLayout";
import CreationLayout from "../../components/Layout/CreationLayout";

export default {
  components: {CreationLayout},
  layout: [AppLayout],
  name: "CreateCourseMaterial",
  data() {
    return {
      items: [
        {
          title: "Polynomial Arithmetic",
        },
        {
          title: "Cyclic Curves"
        }
      ]
    }
  }
}
</script>
