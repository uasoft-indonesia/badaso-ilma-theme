import { mount } from "@vue/test-utils";
import AddCourseCard from "../../src/resources/app/components/CourseCard";

// every test file should include AT LEAST ONE "describe()", "it()", and "expect()"
describe("CourseCard Component", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(AddCourseCard, {});
            
        });
    })
});
