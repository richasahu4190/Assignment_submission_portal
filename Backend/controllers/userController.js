const User = require('../DB/models/User');
const Assignment = require('../DB/models/Assignment');
const Admin = require('../DB/models/Admin');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'jwtKey'; 

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ error: 'Username already taken' });
    }
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({ error: 'use valid username and password or register first' });
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.uploadAssignment = async (req, res) => {
    try {
      const { task, adminId } = req.body;
      const admin = await Admin.findOne({ username: adminId });
      console.log('Found admin:', admin);
      if (!admin) {
        return res.status(400).send({ error: 'Admin not found' });
      }
      const existingAssignment = await Assignment.findOne({
        userId: req.user.username,
        task: task
      });
      if (existingAssignment) {
        return res.status(400).send({ error: 'You have already submitted this assignment' });
      }
      const assignment = new Assignment({
        userId: req.user.username,
        task,
        admin: admin.username,
      });
      await assignment.save();
      res.status(201).send({ message: 'Assignment uploaded successfully', assignment });
    } catch (error) {
      console.error('Error uploading assignment:', error);
      res.status(400).send({ error: error.message });
    }
  };

exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, 'username');
    res.send(admins);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};