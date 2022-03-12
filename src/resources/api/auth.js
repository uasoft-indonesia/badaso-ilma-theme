import api from "./config";

const apiPrefix = "/badaso-api/module/lms/v1/auth/";

export default {
  register(data) {
    const endPoint = apiPrefix + "register";
    const response = api.post(endPoint, data);
    return response;
  },
  async login(data) {
    const endPoint = apiPrefix + "login";
    const response = await api.post(endPoint, data);
    return response;
  },
};
