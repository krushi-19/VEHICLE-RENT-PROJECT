const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { fullName, email, password, phoneNumber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName, email, password: hashedPassword, phoneNumber });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message, err_ctx: 'registartion Error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { username: email, password } = req.body;
  console.log('-----1------',req.body,  typeof password)

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, email: user.email, name: user.fullName  }, 'your_jwt_secret', { expiresIn: '1h' });
    console.log(token);
    res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user
router.put('/user/edit', async (req, res) => {
  const { fullName, email, phoneNumber } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate({email: email}, { fullName, phoneNumber }, { new: true });
    console.log('---updatedUser: ', JSON.stringify(updatedUser, null, 2));
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user
router.delete('/users/delete', async (req, res) => {
  try {
    await User.findOneAndDelete({email: req.body.email});
    res.json({ msg: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
