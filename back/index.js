const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const productRoutes = require('./routes/product');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json('Welcome to website app');
});

app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});