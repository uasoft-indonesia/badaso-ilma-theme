import api from "./config";

let apiPrefix = "/badaso-api/module/lms/v1/auth/";

export default {
  register(data) {
    let ep = apiPrefix + "register";
    let response = api.post(ep, data);
    return response;
  },
  async login(data) {
    let ep = apiPrefix + "login";
    let response = await api.post(ep, data);
    return response;
  },
};
