import { mount } from "@vue/test-utils";
import JoinCourse from "../../src/resources/app/pages/course/JoinCourse";

describe("JoinCoursePage", () => {
    it("should renders", () => {
        const wrapper = mount(JoinCourse, {});

        expect(wrapper.find('#join-card').exists()).toBe(true);
        expect(wrapper.find('#title').text()).toBe('Enter Code');
    });
});
