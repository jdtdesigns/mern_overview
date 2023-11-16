const { sign, verify } = require('jsonwebtoken');
const User = require('../models/User');

async function createToken(user_id) {
  try {
    const token = await sign({ user_id }, process.env.JWT_SECRET);

    return token;
  } catch (error) {
    console.log(error.message);
  }
}

async function authenticate({ req, res }) {
  const token = req.cookies.token;

  if (!token) return { res: res }

  try {
    const data = await verify(token, process.env.JWT_SECRET, {
      maxAge: '1hr'
    });

    const user = await User.findById(data.user_id).populate('hobbies');

    return { user: user, res: res }
  } catch (error) {
    return { res: res }
  }
}

module.exports = { createToken, authenticate }