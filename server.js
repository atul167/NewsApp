const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const { totalmem } = require('os');
const port = 5000;
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname) });
});

// Create an /api endpoint
app.get('/api', async (req, res) => {
  console.log(req.query); // Use req.query to access the query string
  let url = "https://newsapi.org/v2/everything?" + req.url.split('?')[1]; // Construct the URL
  // console.log(url);
  let r = await axios(url);
  let a = r.data;
  res.json(a);

});
app.get('/about', (req, res) => {
    res.sendFile('index2.html', {root: path.join(__dirname) });
});

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
