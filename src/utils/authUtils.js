const knex = require('../../config');

// console.log(knex, "knex")
async function count(db, params) {
  const res = await knex(db)
    .count('u_email')
    .where(params)
    .first();

  console.log(res)
  return Object.values(res);
}

async function findOne(db, params, outputColumns) {
  const res = await knex(db)
    .select(outputColumns)
    .where(params)
    .first();

  return res;
}

async function create(db, params) {
  const res = await knex(db)
    .insert(params);

  if (!res.length) {
    return null;
  }

  return res[0];
}


module.exports = {
  findOne,
  create,
  count,
}
