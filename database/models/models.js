const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  message: String,
  date: String,
  isReply: Boolean,
  replyParentId: Number,
  product_id: Number,
  user_id: Number,
});

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  profile_photo: String,
});

const commentsModel = mongoose.model('Comments', commentsSchema);
const userModel = mongoose.model('User', userSchema);

const insertOneComment = (comments, callback) => {
  commentsModel.create(comments, callback);
};

const insertOneUser = (user, callback) => {
  userModel.create(user, callback);
};

module.exports.insertOneComment = insertOneComment;
module.exports.insertOneUser = insertOneUser;
