import { mount } from "@vue/test-utils";
import AddCourseCard from "../../src/resources/app/components/AddCourseCard";

// every test file should include AT LEAST ONE "describe()", "it()", and "expect()"
describe("AddCourseCard Component", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(AddCourseCard, {});
            
            const findAddCourse = () => wrapper.find('#add-course-tag');
            expect(findAddCourse().exists()).toBe(true);
            expect(findAddCourse().text()).toBe('Add Course');

            const findCreateButton = () => wrapper.find('#create-btn');
            expect(findCreateButton().exists()).toBe(true);

            const findJoinButton = () => wrapper.find('#join-btn');
            expect(findJoinButton().exists()).toBe(true);
        });
    })
});
