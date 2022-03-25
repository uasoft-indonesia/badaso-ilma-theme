import { mount } from "@vue/test-utils";
import AnnouncementContainer from "../../../src/resources/app/components/Container/AnnouncementContainer";

describe("when loaded", () =>  {
  it("should renders", () => {
    const wrapper = mount(AnnouncementContainer, {});

    const findContainer = wrapper.find("#container");
    expect(findContainer.exists()).toBe(true);
  })
});
