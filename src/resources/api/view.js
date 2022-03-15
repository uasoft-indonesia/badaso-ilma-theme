import api from "./config";

let apiPrefix = "/badaso-api";

export default {
  async view() {
    let ep = apiPrefix + "/module/lms/v1/courseuser/view";
    let response = await api.get(ep);

    return response;
  },
};
