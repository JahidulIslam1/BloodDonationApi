const express = require('express')
const router = express.Router()
const {
  getDoners,
  setDoner,
  updateDoner,
  deleteDoner,
} = require('../controllers/donerController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getDoners).post(protect, setDoner)
router.route('/:id').delete(protect, deleteDoner).put(protect, updateDoner)

module.exports = router