const axios = require("axios");

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// Get All
const getAllUsersWS = async () => {
  return await axios.get(USERS_URL);
};

module.exports = {
  getAllUsersWS,
};
