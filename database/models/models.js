const mongoose = require('mongoose');

require('dotenv').config();

// mongoose.connect(process.env.DBURL);
mongoose.connect('mongodb://localhost/comments');

mongoose.Promise = Promise;

const commentsSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  profile_photo: String,
  user_role: String,
  message: String,
  date: Date,
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
  name: String,
  profile_photo: String,
  user_role: String,
  message: String,
  date: Date,
  parentCommentId: Number,
});

const commentsModel = mongoose.model('Comments', commentsSchema);
const userModel = mongoose.model('User', userSchema);
const replyModel = mongoose.model('Reply', replySchema);

const insertOneComment = (comments) => {
  return commentsModel.insertMany(comments);
};

const insertOneUser = (user) => {
  return userModel.insertMany(user);
};

const insertOneReply = (reply) => {
  return replyModel.insertMany(reply);
};

const findCommentForProduct = productId => commentsModel.find({ product_id: productId }).sort({ id: -1 }).exec();
const findReplyForComment = commentId => replyModel.find({ parentCommentId: commentId }).exec();


module.exports.insertOneComment = insertOneComment;
module.exports.insertOneUser = insertOneUser;
module.exports.insertOneReply = insertOneReply;
module.exports.findCommentForProduct = findCommentForProduct;
module.exports.findReplyForComment = findReplyForComment;
