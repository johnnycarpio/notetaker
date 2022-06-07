require('dotenv').config()

const PORT    = process.env.PORT || 3306;
const express = require('express');
const app     = express();

const serverRoutes = require('./routes/serverRoutes');
const clientRoutes  = require('./routes/clientRoutes');

const fs      = require('fs');
const path    = require('path');


app.use(express.urlencoded({
  extended : true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', serverRoutes);
app.use('/', clientRoutes);


app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
