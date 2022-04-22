const mongoose = require('mongoose');
const { getMeta } = require('../helpers');

const InviteCodeSchema = new mongoose.Schema({
  //code就是邀请码
    code: String,
  //用来注册那个账户
    user: String,

    meta: getMeta(),
});

mongoose.model('InviteCode', InviteCodeSchema);