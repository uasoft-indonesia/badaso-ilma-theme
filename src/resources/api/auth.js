import api from "./config";

let apiPrefix = "/badaso-api/module/lms/v1/auth/";

export default {
  register(data) {
    let ep = apiPrefix + "register";
    let response = api.post(ep, data);
    return response;
  },
};
