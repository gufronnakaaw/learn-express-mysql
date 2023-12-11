const express = require('express');
const cors = require('cors');
const PORT = 3000;

const db = require('./utils/db');

const app = express();

app.use(cors());

app.get('/products', async (req, res) => {
  const data = await db.promise().query('SELECT * FROM products');

  res.json({
    data: data[0],
  });
});

// app.post('/save', (req, res) => {
//   console.log(req.body);
// });

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
