const { Schema, model } = require('mongoose');

const hobbySchema = new Schema({
  name: String
});

const Hobby = model('Hobby', hobbySchema);

// Hobby.create({
//   name: 'Pickleball'
// }).then(() => console.log('hobby created'))

module.exports = Hobby;