const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Database = require('../database/models/models');

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.get('/comments/:id', (req, res) => {
  Database.findCommentForProduct(req.params.id)
    .then(result => res.send(result));
});

app.get('/replies/:id', (req, res) => {
  Database.findReplyForComment(req.params.id)
    .then(result => res.send(result));
});


app.listen(3004, () => {
  console.log('Server listening on port 3004');
});
