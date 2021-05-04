const axios = require("axios");

const API = {
  getAllProjectors: function () {
    return axios.get("http://localhost:8080/api/projectors");
  }
};

export default API;
