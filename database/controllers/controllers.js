const mongoose = require('mongoose');
const Database = require('../models/models');

mongoose.connect('mongodb://localhost/comments');

const getCommentForProduct = (productId) => {
  Database.findCommentForProduct(productId, (error, data) => {
    if (error) {
      console.log(error);
    }
    // callback(data);
    return data;
  });
};

module.exports.getCommentForProduct = getCommentForProduct;
