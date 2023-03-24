require('dotenv').config();
const knex = require('../../../config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const path = require('path');
const generateJWT = require('../../middleware/generateJWT');

const { findUser, countUsers, createUser } = require('../queries/authQuery');


async function signUpUsers(req, res, next) {
  try {
    const {
      u_name,
      u_email,
      u_password,
      u_phone
    } = req.body;

    const validEmail = await countUsers({ u_email: u_email });
    if (validEmail[0] !== '0') {
      return res.status(409).json({
        success: false,
        message: "Email has already exists",
        data: null
      });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(u_password, salt);

    await createUser({
      u_email: u_email,
      u_name: u_name,
      u_password: encryptedPassword,
      u_phone: u_phone,
    });

    res.send({
      success: true,
      message: 'Registration successful',
      data: null
    })
  } catch (error) {
    next(error);
  }
}


async function signIn(req, res, next) {
  try {
    const { u_email, u_password } = req.body;
    const user = await findUser({ u_email }, [
      'id', 'u_name', 'u_phone', 'u_validation', 'u_email', 'u_password'
    ]);

    if (!user) {
      return res.status(404).send({
        "status": false,
        "message": "Email not found",
        "data": null
      });
    }

    const validPassword = await bcrypt.compare(u_password, user.u_password);

    if (!validPassword) {
      return res.status(404).send({
        "status": true,
        "message": 'Incorrect email / password',
        "data": null
      });
    }

    const token = generateJWT(user.id);
    await knex('users_section').update('u_tokens', token).where('id', user.id);

    const userInfo = await knex.select('id', 'u_name', 'u_email', 'u_phone', 'u_validation', 'u_tokens').from('users_section').where('id', user.id)

    res.set('X-Access-Token', token)

    res.send({
      status: true,
      message: 'Login successful',
      data: userInfo
    })

  } catch (error) {
    next(error);
  }
}





module.exports = {
  signUpUsers,
  signIn
}
