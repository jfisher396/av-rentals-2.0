const axios = require("axios");

const API = {
  getAllProjectors: function () {
    return axios.get("http://localhost:8080/api/projectors");
  },

  getAllScreens: function () {
    return axios.get("http://localhost:8080/api/screens");
  },

  getAllComputers: function () {
    return axios.get("http://localhost:8080/api/computers");
  },
};

export default API;
