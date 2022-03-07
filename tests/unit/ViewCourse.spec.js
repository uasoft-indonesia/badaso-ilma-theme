
import { mount } from "@vue/test-utils";
import ViewCourse from "../../src/resources/app/pages/ViewCourse";

// every test file should include AT LEAST ONE "describe()", "it()", and "expect()"
describe("CourseCard Component", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(ViewCourse, {});

            const findRoom = () => wrapper.find('#course-card');
            expect(findRoom().exists()).toBe(true);
        });
    })
});
