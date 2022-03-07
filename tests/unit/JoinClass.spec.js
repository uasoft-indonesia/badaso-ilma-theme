import { mount } from "@vue/test-utils";
import JoinCourse from "../../src/resources/app/pages/JoinCourse";

describe("JoinCoursePage", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(JoinCourse, {});
            const findTitle = () => wrapper.find('#title');
            const findSubTitle = () => wrapper.find('#sub-title');

            expect(wrapper.find('#join-card').exists()).toBe(true);
            expect(findTitle().exists()).toBe(true);
            expect(findTitle().text()).toBe('Enter Code');
            expect(findSubTitle().exists()).toBe(true);
            expect(findSubTitle().text()).toBe('Class code provided by your teacher');

            expect(wrapper.find('#code-form').exists()).toBe(true);
            expect(wrapper.find('#code-form').attributes().label).toBe('Class Code');
        });
    })
});
