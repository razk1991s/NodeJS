const usersRepo = require("../repositories/usersRepo");
const usersWSRepo = require("../repositories/usersWBRepo");

//from DB:
const getAllUsers = (filters) => {
  return usersRepo.getAllUsers(filters);
};

//from Web Service:
const getAllUsersWS = async () => {
  let { data: usersWS } = await usersWSRepo.getAllUsersWS();

  usersWS = usersWS.map(({ name, email }) => ({
    name,
    email,
  }));

  return usersWS;
};

const getUserById = (id) => {
  return usersRepo.getUserById(id);
};

const addUser = (obj) => {
  return usersRepo.addUser(obj);
};

const login = async (obj) => {
  const allUsers = await getAllUsersWS();

  if (
    allUsers.find(
      (userInfo) => userInfo.name === obj.name && userInfo.email === obj.email
    )
  ) {
    return obj.name;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  getAllUsersWS,
  login,
};
