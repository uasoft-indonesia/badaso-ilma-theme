import api from "./config";

const apiPrefix = "/badaso-api/module/lms/v1/auth/";

export default {
<<<<<<< HEAD
  register(data) {
    const endPoint = apiPrefix + "register";
    const response = api.post(endPoint, data);
=======
  async register(data) {
    const endPoint = apiPrefix + "register";
    const response = await api.post(endPoint, data);
>>>>>>> 2e49ac125524bc500fc979301281c3a00c2e4afb
    return response;
  },
  async login(data) {
    const endPoint = apiPrefix + "login";
    const response = await api.post(endPoint, data);
    return response;
  },
};
