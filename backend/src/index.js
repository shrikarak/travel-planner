
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const tripRoutes = require('./routes/tripRoutes');
const itineraryItemRoutes = require('./routes/itineraryItemRoutes');

app.use('/api/trips', tripRoutes);
app.use('/api/itinerary-items', itineraryItemRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the Travel Planner API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
