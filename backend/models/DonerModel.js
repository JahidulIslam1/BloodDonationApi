const mongoose = require('mongoose')

const donerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    gender: {
      type : String,
      required : true
   },
   age: {
    type : String,
    required : true
  },
  height: {
    type : String,
    required : true
  },
  weight: {
    type : String,
    required : true
  },
  bloodGroup: {
    type : String ,
    required : true
  },
  area: {
    type : String ,
    required : true
  },
  phone: {
    type : String ,
    required : true 
  },
  created_at : {
    type: Date, default: Date.now
  } 
  },
/*  {
    timestamps: true,
  }*/
)

module.exports = mongoose.model('Doner', donerSchema)