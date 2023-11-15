const User = require('../models/User');
const Hobby = require('../models/Hobby');

const resolvers = {
  Query: {
    async getAllUsers() {
      const users = await User.find().populate('hobbies');
      console.log(users);
      return users;
    },
    async getOneUser(_, args) {
      const user = await User.findById(args.id).populate('hobbies');

      return user;
    }
  }
}

module.exports = resolvers;