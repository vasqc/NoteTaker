const express = require('express');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));