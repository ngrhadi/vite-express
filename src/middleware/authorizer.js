require('dotenv').config();

const jwt = require('jsonwebtoken');
const knex = require('../../config')
const generateJWT = require('./generateJWT');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];

    const curentTime = new Date().getTime();
    const jwtExpt = new Date(jwt.decode(token).exp).getTime()
    const idUser = jwt.decode(token).id
    console.log(idUser)

    let newToken;

    if (curentTime > jwtExpt) {
      newToken = generateJWT(idUser)
      res.set('X-Access-Token', newToken)
      await knex('users_section').where({ id: idUser }).update({
        u_tokens: newToken
      })
    }


    if (!token) {
      return res.status(401).send({
        "status": false,
        "message": 'You are not Login',
        "data": null
      });
    }

    const payload = jwt.verify(newToken, process.env.JWT_SECRET);
    req.userId = payload.id;

    next();
  } catch (err) {
    return res.status(500).send({
      "status": false,
      "message": 'You are not Login',
      "data": null
    });
  }
}
