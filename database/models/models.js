const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  message: String,
  date: String,
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

const replySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  message: String,
  date: String,
  parentCommentId: Number,
});

const commentsModel = mongoose.model('Comments', commentsSchema);
const userModel = mongoose.model('User', userSchema);
const replyModel = mongoose.model('Reply', replySchema);

const insertOneComment = (comments, callback) => {
  commentsModel.create(comments, callback);
};

const insertOneUser = (user, callback) => {
  userModel.create(user, callback);
};

const insertOneReply = (reply, callback) => {
  replyModel.create(reply, callback);
};

module.exports.insertOneComment = insertOneComment;
module.exports.insertOneUser = insertOneUser;
module.exports.insertOneReply = insertOneReply;
