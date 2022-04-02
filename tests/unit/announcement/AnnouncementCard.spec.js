import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import AnnouncementCard from "../../../src/resources/app/components/AnnouncementCard";

const localVue = createLocalVue();

describe("AnnouncementCard", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    describe("and when no comment exist", () => {
      it("should renders", () => {
        const wrapper = mount(AnnouncementCard, {
          localVue,
          vuetify,
        });

        const findAnnouncement = wrapper.find("#announcement");
        expect(findAnnouncement.exists()).toBe(true);

        const findComment = wrapper.find("#comments");
        expect(findComment.exists()).toBe(false);
      });
    });

    describe("and when comment exist", () => {
      it("comments should be rendered", async () => {
        const wrapper = mount(AnnouncementCard, {
          localVue,
          vuetify,
          data() {
            return {
              dataComments: {
                name: "Author",
                date: "19 January 2021",
                content: "Test Content",
                id: 1,
              }
            }
          }
        });

        const findComment = await wrapper.find("#comments");
        await expect(findComment.exists()).toBe(true);
      })
    });
  });
});
