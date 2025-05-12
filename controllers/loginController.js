const { login } = require('../models/loginModel');

const login_user = async (req, res) => {
    try {
     console.log(req.body);
      const { username, password } = req.body;
      const user = await login(username,password);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Login issue' ,error: err.message});
    }
  };
  
module.exports = { login_user };