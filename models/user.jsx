

///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const UsersSchema = new Schema({
    username: {
  type: String,
  required: true,
  unique: true,

},
email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    unique: true,
  },
  // Additional fields related to Google OAuth
  googleAccessToken: {
    type: String,
  },
  googleRefreshToken: {
    type: String,
  },
  // You can add more fields based on your application's requirements
  // For example, 'firstName', 'lastName', 'createdAt', etc.
});

const User = mongoose.model('User', UsersSchema);

module.exports = User;