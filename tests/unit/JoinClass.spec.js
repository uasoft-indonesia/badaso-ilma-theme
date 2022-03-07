import { mount } from "@vue/test-utils";
import JoinCourse from "../../src/resources/app/pages/course/JoinCourse";

describe("JoinCoursePage", () => {
    it("should renders", () => {
        const wrapper = mount(JoinCourse, {});
        const findSubTitle = () => wrapper.find('#sub-title');

        expect(wrapper.find('#join-card').exists()).toBe(true);
        expect(wrapper.find('#title').text()).toBe('Enter Code');
        expect(findSubTitle().exists()).toBe(true);
        expect(findSubTitle().text()).toBe('Class code provided by your teacher');
    });
});
