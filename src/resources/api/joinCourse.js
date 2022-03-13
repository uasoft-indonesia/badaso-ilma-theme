import api from "./config";

let apiPrefix = "/badaso-api";

export default {
  async joinCourse(payload) {
    const ep = apiPrefix + "/module/lms/v1/course/join";

    let [data, error, errorMessage] = [null, null, null];
    try {
      const response = await api.post(ep, payload);

      if (!!response.errors) {
        throw response.errors;
      }

      data = payload.data;
    } catch (e) {
      error = e;
      errorMessage = "Something went wrong, please try again later";
    }

    return { data, error, errorMessage }
  }
}
