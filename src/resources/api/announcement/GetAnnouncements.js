import api from "../config";

let apiPrefix = "/badaso-api";

export default {
  async GetAnnouncements(courseId) {
    const apiUrl = `${apiPrefix}/module/lms/v1/announcement?courseId=${courseId}`;
    return api.get(apiUrl);
  },
};
