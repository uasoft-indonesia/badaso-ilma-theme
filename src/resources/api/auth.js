import api from "./config";

let apiPrefix = "/badaso-api";

export default {
  async register(data) {
    let url = apiPrefix + "/module/lms/v1/auth/register";
    let response = await api.post(url, data);
    return response;
  },
};
