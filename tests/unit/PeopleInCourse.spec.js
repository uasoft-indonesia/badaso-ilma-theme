import { mount } from "@vue/test-utils";
import PeopleInCourse from "../../src/resources/app/pages/PeopleInCourse";

describe("PeopleInCourse", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(PeopleInCourse, {});
            expect(wrapper.find('#title').exists()).toBe(true);
            expect(wrapper.find('#title').text()).toBe('Teacher');
            expect(wrapper.find('#title').text()).toBe('Classmates');
        });
    })
});
