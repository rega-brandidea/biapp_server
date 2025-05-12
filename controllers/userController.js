const { getAllUsers, getUserById } = require('../models/userModel');

const fetchUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
};
const fetchUserById = async (req, res) => {
    try {
      const id = req.params.id;  // Retrieve the ID from the URL
      const user = await getUserById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching user' });
    }
  };
  
module.exports = { fetchUsers,fetchUserById };