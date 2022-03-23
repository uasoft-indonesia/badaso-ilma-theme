import api from "./config";

let apiPrefix = "/badaso-api";

export default {
  async view() {
    let apiUrl = apiPrefix + "/module/lms/v1/course/view";
    let response = await api.get(apiUrl);

    return response;
  },
};
