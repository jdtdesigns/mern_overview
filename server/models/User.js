const { Schema, model } = require('mongoose');
const { hash, compare } = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: {
      validator(val) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)
      },
      message() {
        return 'You must supply a valid email address.'
      }
    }
  },
  password: {
    type: String,
    minLength: [6, 'Your password must be at least 6 characters in length']
  },
  hobbies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hobby'
    }
  ]
}, {
  timestamps: true,
  methods: {
    async validatePass(formPassword) {
      const is_valid = await compare(formPassword, this.password);

      return is_valid;
    }
  },
  toJSON: {
    transform(_, user) {
      delete user.__v;
      delete user.password;
      return user;
    }
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.password = await hash(this.password, 10);
  }

  next();
});

const User = model('User', userSchema);



// User.findOneAndUpdate({
//   _id: '6556381d1ab3fd1f20c8aef0'
// }, {
//   $push: {
//     hobbies: '65563f8b343ca27120d6f427'
//   }
// }).then(() => console.log('updated'))

module.exports = User;

