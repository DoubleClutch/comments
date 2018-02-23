const SeedData = require('./seed_data.js');
const mongoose = require('mongoose');
const Database = require('./database/models/models.js');

mongoose.connect('mongodb://localhost/comments');

const seedCommentDB = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    Database.insertOneComment(data[i], (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log(info, 'Data successly stored!');
    });
  }
};

const seedUserDB = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    Database.insertOneUser(data[i], (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log(info, 'Data successly stored');
    });
  }
};

seedCommentDB(SeedData.comments);
seedUserDB(SeedData.user);
