const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {

    console.log(`API server now on port ${PORT}!`);
});