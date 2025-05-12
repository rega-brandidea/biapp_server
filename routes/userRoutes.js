const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const { fetchUsers,fetchUserById } = require('../controllers/userController');
const { login_user} = require('../controllers/loginController');

router.get('/', fetchUsers);
router.get('/:id', fetchUserById);
router.post('/login', login_user);
//router.post('/getmenu',authenticateToken,getmenu);
module.exports = router;