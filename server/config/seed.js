const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

const User = require('../models/User');
const Hobby = require('../models/Hobby');

const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const is_prod = process.env.NODE_ENV === 'production';

mongoose.connect(is_prod ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/mern_auth_db');

const userData = [];
const hobbyData = [];

let amount = 10;

while (amount--) {
  userData.push({
    email: faker.internet.email(),
    password: 'password'
  });

  hobbyData.push({
    name: faker.word.noun()
  });
}

async function seedData() {
  await User.deleteMany({});
  await Hobby.deleteMany({});

  const users = await User.insertMany(userData);
  console.log('users seeded successfully!');

  const hobbies = await Hobby.insertMany(hobbyData);
  console.log('hobbies seeded successfully!');

  const user = users[0];

  user.hobbies = hobbies.map(hobby => hobby._id);

  await user.save()

  console.log('User hobbies seeded successfully');

  process.exit();
}

seedData();