// PATH: 'JOYFUL-JINGLES/express-react/backend/models/user.jsx'


///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const UserSchema = new Schema({
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
});

const User = mongoose.model('User', UserSchema);

module.exports = User;