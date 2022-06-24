import api from "./config";

const apiPrefix = "/badaso-api/module/lms/v1/auth/";

export default {
  async register(data) {
    const apiUrl = apiPrefix + "register";
    const response = await api.post(apiUrl, data);
    return response;
  },
  async login(data) {
    const apiUrl = apiPrefix + "login";
    const response = await api.post(apiUrl, data);
    return response;
  },
};
