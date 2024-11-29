const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/authRoutes');
const gymRoutes = require('./routes/gymRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/gym', gymRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});