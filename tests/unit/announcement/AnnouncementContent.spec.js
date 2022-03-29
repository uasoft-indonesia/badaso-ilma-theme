import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import AnnouncementContent from "../../../src/resources/app/components/AnnouncementContent";

const localVue = createLocalVue();

describe("AnnouncementContent", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    describe('and when not editing', () => {
      it("should renders",  () => {
        const wrapper = mount(AnnouncementContent, {
          localVue,
          vuetify,
        });

        const findAuthor = wrapper.find("#author");
        expect(findAuthor.exists()).toBe(true);

        const findDate = wrapper.find("#date");
        expect(findDate.exists()).toBe(true);

        const findContent = wrapper.find("#content");
        expect(findContent.exists()).toBe(true);

        const findMenu = wrapper.find("#menu");
        expect(findMenu.exists()).toBe(true);

        const findEditForm = wrapper.find("#edit-form");
        expect(findEditForm.exists()).toBe(false);
      });
    });

    describe('and when editing announcement', () => {
      it("should renders", async () => {
        const wrapper = await mount(AnnouncementContent, {
          localVue,
          vuetify,
        });

        await wrapper.setData({isEditing : true})

        const findEditForm = wrapper.find("#edit-form");
        await expect(findEditForm.exists()).toBe(true);

        const findContent = wrapper.find("#content");
        await expect(findContent.exists()).toBe(false);
      })
    })
  });
});
