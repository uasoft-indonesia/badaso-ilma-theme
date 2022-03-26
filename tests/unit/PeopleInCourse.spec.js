import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import PeopleInCourse from "../../src/resources/app/pages/PeopleInCourse";

const localVue = createLocalVue();

describe("PeopleInCourse", () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(PeopleInCourse, {
                localVue,
                vuetify,
                mocks: {
                    $store: {
                        state: {
                            isAuthenticated: true,
                        },
                    },
                },
            });
            expect(wrapper.find('#teacher-title').exists()).toBe(true);
            expect(wrapper.find('#teacher-title').text()).toContain('Teachers');
            expect(wrapper.find('#classmate-title').exists()).toBe(true);
            expect(wrapper.find('#classmate-title').text()).toContain('Classmates');
        });

        describe("when user is not authenticated", () => {
            it("should redirect to login page", () => {
                const mockInertiaVisit = jest.fn();
                const wrapper = mount(PeopleInCourse, {
                    localVue,
                    vuetify,
                    mocks: {
                        $store: {
                            state: {
                                isAuthenticated: false,
                            },
                        },
                        $inertia: {
                            visit: mockInertiaVisit,
                        },
                    },
                });

                expect(mockInertiaVisit).toHaveBeenCalledWith("/login");
            });
        });

        describe("when user is authenticated", () => {
            it("should not redirect anywhere", () => {
                const mockInertiaVisit = jest.fn();
                const wrapper = mount(PeopleInCourse, {
                    localVue,
                    vuetify,
                    mocks: {
                        $store: {
                            state: {
                                isAuthenticated: true,
                            },
                        },
                        $inertia: {
                            visit: mockInertiaVisit,
                        },
                    },
                });
                expect(mockInertiaVisit).not.toHaveBeenCalled();
            });
            describe("when there is only teacher", () => {
                it("should renders a list of teacher only", () => {
                    const mockInertiaVisit = jest.fn();
                    const wrapper = mount(PeopleInCourse, {
                        localVue,
                        vuetify,
                        mocks: {
                            $store: {
                                state: {
                                    isAuthenticated: true,
                                },
                            },
                            $inertia: {
                                visit: mockInertiaVisit,
                            },
                        },
                        data() {
                            return {
                                peoples: [
                                    {
                                        name: "Human 1",
                                        role: "teacher",
                                    },
                                ],
                            }
                        }
                    });

                    // Only teache exists
                    expect(wrapper.find('#teacher-avatar').exists()).toBe(true);
                    expect(wrapper.find('#teacher-name').exists()).toBe(true);
                    expect(wrapper.find('#student-avatar').exists()).toBe(false);
                    expect(wrapper.find('#student-name').exists()).toBe(false);
                });
            });

            describe("when there are teacher and student", () => {
                it("should renders a list of teacher and student", () => {
                    const mockInertiaVisit = jest.fn();
                    const wrapper = mount(PeopleInCourse, {
                        localVue,
                        vuetify,
                        mocks: {
                            $store: {
                                state: {
                                    isAuthenticated: true,
                                },
                            },
                            $inertia: {
                                visit: mockInertiaVisit,
                            },
                        },
                        data() {
                            return {
                                peoples: [
                                    {
                                        name: "Human 1",
                                        role: "teacher",
                                    },
                                    {
                                        name: "Human 2",
                                        role: "student",
                                    },
                                ],
                            }
                        }
                    });
                    // Teacher and student exists
                    expect(wrapper.find('#teacher-avatar').exists()).toBe(true);
                    expect(wrapper.find('#teacher-name').exists()).toBe(true);
                    expect(wrapper.find('#student-avatar').exists()).toBe(true);
                    expect(wrapper.find('#student-name').exists()).toBe(true);
                });
            });
        });
    })
});
