const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
const usersRoutes = require('./users');
app.use('/users', usersRoutes);
const itemsRoutes = require('./items');
app.use('/items', itemsRoutes);

app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`)
})
