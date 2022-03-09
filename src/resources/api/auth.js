import api from "./config";

let apiPrefix = "/badaso-api";

export default {
  register(data) {
    let ep = apiPrefix + "/module/lms/v1/user/register";
    let response = api.post(ep, data);
    response.then((res) => {
      if (res.data.accessToken) {
        let token = res.data.accessToken;
        localStorage.setItem("token", token);
        let date = new Date();
        let timeNow = date.getTime();
        localStorage.setItem(
          window.btoa("tokenAccessTime"),
          window.btoa(timeNow)
        );
      }
    });
    return response;
  },
};
