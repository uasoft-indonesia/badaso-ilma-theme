import { mount } from "@vue/test-utils";
import CourseCard from "../../src/resources/app/components/CourseCard";

// every test file should include AT LEAST ONE "describe()", "it()", and "expect()"
describe("CourseCard Component", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(CourseCard, {});

            const findRoom = () => wrapper.find('#title');
            expect(findRoom().exists()).toBe(true);
            expect(findRoom().text()).toBe('Room');
        });
    })
});
