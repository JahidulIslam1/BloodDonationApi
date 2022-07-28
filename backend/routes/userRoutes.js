const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUser,
} = require('../controllers/userController');
const { protect, protectAdmin } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUser) // Only User can see this
router.get('/alluser', protect, protectAdmin, getAllUser); // Only Admin can see this

module.exports = router;