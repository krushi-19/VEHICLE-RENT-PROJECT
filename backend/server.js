const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
// http://localhost:5001
// Middleware
app.use(cors());
app.use(express.json());
// http://localhost:5001/api

app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}`, {

})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// http://localhost:5001/
app.get('/', (req, res) => {
    console.log('get called')
    res.send('Welcome to the Vehicle Renting System'); // Send a response to the root URL
  });
  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

