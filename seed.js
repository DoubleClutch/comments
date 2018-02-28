const faker = require('faker');
faker.locale = 'en_US';

const mongoose = require('mongoose');
const Database = require('./database/models/models.js');

mongoose.connect('mongodb://localhost/comments');

const roleArray = ['', '', '', 'Superbacker', '1-time creator', 'project creator']

const seedCommentDB = () => {
  let projectId = 1;
  let productId = 1;
  for (let i = productId; i <= 10; i += 1) {
    for (let j = 1; j <= 12; j += 1) {
      const obj = {
        id: projectId,
        name: faker.name.findName(),
        profile_photo: faker.internet.avatar(),
        user_role: roleArray[Math.floor(Math.random() * 5)],
        message: faker.lorem.paragraph(),
        date: faker.date.past(),
        product_id: productId,
      };
      projectId += 1;
      Database.insertOneComment(obj, (error) => {
        if (error) console.log(error);
        else console.log('Data successly stored!');
      });
    }
    productId += 1;
  }
};

const seedReplyDB = () => {
  let projectId = 1;
  let productId = 1;
  for (let i = productId; i <= 10; i += 1) {
    for (let j = 1; j <= 12; j += 1) {
      const obj = {
        id: projectId,
        name: faker.name.findName(),
        profile_photo: faker.internet.avatar(),
        user_role: roleArray[Math.floor(Math.random() * 5)],
        message: faker.lorem.paragraph(),
        date: faker.date.past(),
        parentCommentId: projectId,
      };
      projectId += 1;
      Database.insertOneReply(obj, (error) => {
        if (error) console.log(error);
        else console.log('Data successly stored!');
      });
    }
    productId += 1;
  }
};

seedCommentDB();
seedReplyDB();
