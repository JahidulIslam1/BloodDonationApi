const express = require('express')
const router = express.Router()
const {
  getDoners,
  setDoner,
  updateDoner,
  deleteDoner,
  getAllDoner,
} = require('../controllers/donerController')

const { protect, protectAdmin } = require('../middleware/authMiddleware')

router.route('/doner').get( protect, getDoners) // Only doner can see this
router.route('/alldoners').get( protect, protectAdmin, getAllDoner) // Only admin can see this
router.route('/post').post(protect, setDoner) // Donating blood post
router.route('/:id').put( protect, updateDoner)
router.route('/:id').delete( protect, protectAdmin, deleteDoner) // Only Admin can delete this post


module.exports = router