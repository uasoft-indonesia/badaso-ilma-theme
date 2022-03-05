import { mount } from "@vue/test-utils";
import Index from "../../src/resources/app/pages";

// every test file should include AT LEAST ONE "describe()", "it()", and "expect()"
describe("displays message", () => {
  // mount() returns a wrapped Vue component we can interact with
  it("should renders", () => {
    // Mounts the component to be tested
    const wrapper = mount(Index, {});

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Home");
  });
});
