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

  getAllAudio: function () {
    return axios.get("http://localhost:8080/api/audio");
  },
  
  getAllMisc: function () {
    return axios.get("http://localhost:8080/api/misc");
  },

  newUser: function (userData) {
    return axios.post("http://localhost:8080/api/users/signup", userData)
  },

  userLogin: function (loginData) {
    return axios.post("http://localhost:8080/api/users/login", loginData, {withCredentials: true})
  },

  getCurrentUser: function() {
    return axios.get("http://localhost:8080/api/users/readsessions", {withCredentials: true})
  }
};

export default API;