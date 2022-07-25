const asyncHandler = require('express-async-handler')

const Doner = require('../models/DonerModel')
const User = require('../models/UserModel')

// @desc    Get doners
// @route   GET /api/doners
// @access  Private
const getDoners = asyncHandler(async (req, res) => {
  const doners = await Doner.find({ user: req.user.id })

  res.status(200).json(doners)
})

// @desc    Set doner
// @route   POST /api/doners
// @access  Private
const setDoner = asyncHandler(async (req, res) => {
  if (!req.body.gender) {
    res.status(400)
    throw new Error('Please add the field')
  }

  if (!req.body.age) {
    res.status(400)
    throw new Error('Please add the field')
  }

  if (!req.body.height) {
    res.status(400)
    throw new Error('Please add the field')
  }

  if (!req.body.weight) {
    res.status(400)
    throw new Error('Please add the field')
  }

  if (!req.body.bloodGroup) {
    res.status(400)
    throw new Error('Please add the field')
  }

  if (!req.body.area) {
    res.status(400)
    throw new Error('Please add the field')
  }

  if (!req.body.phone) {
    res.status(400)
    throw new Error('Please add the field')
  }

  const doner = await Doner.create({
   // text: req.body.text,
    gender: req.body.gender,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    bloodGroup: req.body.bloodGroup,
    area: req.body.area,
    phone: req.body.phone,
    user: req.user.id,
  })

  res.status(200).json(doner)
})

// @desc    Update doner
// @route   PUT /api/doners/:id
// @access  Private
const updateDoner = asyncHandler(async (req, res) => {
  const doner = await Doner.findById(req.params.id)

  if (!doner) {
    res.status(400)
    throw new Error('Doner not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the doner user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedDoner = await Doner.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedDoner)
})

// @desc    Delete doner
// @route   DELETE /api/doners/:id
// @access  Private
const deleteDoner = asyncHandler(async (req, res) => {
  const doner = await Doner.findById(req.params.id)

  if (!doner) {
    res.status(400)
    throw new Error('Doner not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the doner user
  if (doner.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await doner.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getDoners,
  setDoner,
  updateDoner,
  deleteDoner,
}