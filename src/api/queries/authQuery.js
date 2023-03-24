const { count, findOne, create } = require("../../utils/authUtils");

function countUsers(params) {
  return count('users_section', params);
}

async function findUser(params, outputColumns) {
  return findOne('users_section', params, outputColumns);
}

async function createUser(params) {
  return create('users_section', params);
}


module.exports = {
  findUser,
  createUser,
  countUsers,
}
