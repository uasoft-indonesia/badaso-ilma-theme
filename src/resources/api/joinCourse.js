import api from "./config";

let apiPrefix = "/badaso-api";

export default {
  async joinCourse(data) {
    let ep = apiPrefix + "/module/lms/v1/course/join";
    let response = await api.post(ep, data);

      if (response.data) {
        alert('successful');
      } else {
        alert('fail');
      }
    return response;
  }
}
