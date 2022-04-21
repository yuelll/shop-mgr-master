const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const InviteCodeSchema = new mongoose.Schema({
  //code就是邀请码
    code: String,
  //用来注册那个账户
    user: String,

    mate: getMate(),
});

mongoose.model('InviteCode', InviteCodeSchema);