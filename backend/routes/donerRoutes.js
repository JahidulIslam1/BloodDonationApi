const express = require('express')
const router = express.Router()
const {
  getDoners,
  setDoner,
  updateDoner,
  deleteDoner,
  getAllDoner,
//  filterBlood
getBlood,
getBloodByArea
} = require('../controllers/donerController')

const { protect, protectAdmin } = require('../middleware/authMiddleware')

router.get('/doner', protect, getDoners) // Only doner can see this
router.route('/alldoners').get( protect, protectAdmin, getAllDoner) // Only admin can see this
router.route('/getblood').get( protect, getBlood) // For user
router.route('/getbloodbyarea').get( protect, getBloodByArea) // For user
router.route('/post').post(protect, setDoner) // Donating blood post
router.route('/:id').put( protect, updateDoner)
router.route('/:id').delete( protect, protectAdmin, deleteDoner) // Only Admin can delete this post


module.exports = router