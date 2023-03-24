const knex = require('../../../config');

async function listAllUsers(req, res, next) {
  try {
    const { from, to } = req.query;

    console.log(req.query)
    const data = await knex.select("*").from("users_section").limit(to).offset(from)

    res.send({
      status: true,
      message: 'Listing users',
      data: data
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listAllUsers
}
