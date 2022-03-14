import { mount } from "@vue/test-utils";
import courseStream from "../../src/resources/app/pages/courseStream";

describe("Class Code Widget", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(courseStream, {});

            const findTitle = () => wrapper.find('#code-title')
            expect(findTitle().exists()).toBe(true);
            const classCode = () => wrapper.find('#class-code')
            expect(classCode().exists()).toBe(true);
            const copyBtn = () => wrapper.find('#copy-btn')
            expect(copyBtn().exists()).toBe(true);
        })
    })
})