const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const UserSchema = new mongoose.Schema({
  account: String,
  password: String,

  mate: getMate(),
});

mongoose.model('User',UserSchema);