const mongoose = require('mongoose')
const Schema = mongoose.Schema


//job Schema
const JobSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field us is required']
    },

    description:{
        type: String,
        required: [true, 'Title field us is required']
    },

    Location:{
        type: String,
        required: [true, 'Title field us is required']

    },
    Salary:{
        type: String,
        required: [true, 'Title field us is required']

    },
    IsAvailable:{
        type: Boolean,
        default: true
    }
})

const Job = mongoose.model('jobs', JobSchema)

module.exports = Job