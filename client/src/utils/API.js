import axios from "axios";

export default {
  searchPlants: function() {
    return axios.get("/search/:plantName");
  },
  plantDetail: function(id) {
    return axios.get("/plant/" + id);
  },
  findByEmail: function (email) {
    return axios.get()
  },
  // post request using userData from google
  signInUser: function (userData) {
    return axios.post("/api/user", userData)
  }

};
