const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Success' });
});

app.listen(4000, err => {
  err ? console.log('Server Start Failed') : console.log('Server Started');
});
