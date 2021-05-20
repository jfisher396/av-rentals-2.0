
const axios = require("axios");

const urlPrefix = window.env.API_URL_PREFIX_LOCAL;
// const urlPrefix = window.env.API_URL_PREFIX_DEPLOYED;

const API = {
  getAllProjectors: function () {
    return axios.get(`${urlPrefix}/api/projectors`);
  },

  getAllScreens: function () {
    return axios.get(`${urlPrefix}/api/screens`);
  },

  getAllComputers: function () {
    return axios.get(`${urlPrefix}/api/computers`);
  },

  getAllAudio: function () {
    return axios.get(`${urlPrefix}/api/audio`);
  },
  
  getAllMisc: function () {
    return axios.get(`${urlPrefix}/api/misc`);
  },

  newUser: function (userData) {
    return axios.post(`${urlPrefix}/api/users/signup`, userData)
  },

  userLogin: function (loginData) {
    return axios.post(`${urlPrefix}/api/users/login`, loginData, {withCredentials: true})
  },

  getCurrentUser: function() {
    return axios.get(`${urlPrefix}/api/users/readsessions`, {withCredentials: true})
  },

  getCurrentOrders: function() {
    return axios.get(`${urlPrefix}/api/users/currentuserdata`, {withCredentials: true})
  },
  userLogout: function() {
    return axios.get(`${urlPrefix}/api/users/logout`, { withCredentials: true })
  }
};

export default API;