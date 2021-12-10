const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HourBetSchema = new Schema({  
  no:{
    type: Number,
  },
  ticket: {
    type: Number,
    required: true
  }, 
  userid:{
    type: mongoose.ObjectId,
    ref:'user',
    required:true,
    index:true
  },  
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = HourBet = mongoose.model("hourBet", HourBetSchema);
