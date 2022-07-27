const mongoose = require('mongoose')

// create a bounty schema
    /* 
    name: String
    wantedFor: String
    client: String
    ship: String
    reward: Number
    captured: Boolean
    lastSeen: String
    timestamps
    */

const BountySchema = new mongoose.Schema({
    name: {type: String, required: true}, // throws err if not present
    wantedFor: String,
    client: {type: String, required: true},
    ship: String,
    reward: {type: Number, default: 10000},
    captured: {type: Boolean, default: false},
    lastSeen: String,
}, {
    timestamps: true
})

// export bounty model
module.exports = mongoose.model('bounty', BountySchema)