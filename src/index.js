// src/app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
/* app.use(bodyParser.json());
app.use(cors()); */

/* // Connect to MongoDB
mongoose.connect('<mongodb_uri>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Load models
require('./models/Listing');

// Routes
const listingRoutes = require('./routes/listings');
app.use('/api/listings', listingRoutes); */

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
