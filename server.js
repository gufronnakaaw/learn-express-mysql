const express = require('express');
const cors = require('cors');
const PORT = 3000;

// routes
const AuthRoute = require('./routes/AuthRoute');
const NotarisRoute = require('./routes/NotarisRoute');
const ProductRoute = require('./routes/ProductRoute');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(AuthRoute);
app.use(NotarisRoute);
app.use(ProductRoute);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
