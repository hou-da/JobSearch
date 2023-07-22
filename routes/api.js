const express = require('express');
const router = express.Router();
const Job = require('../models/job');

//get all job
router.get('/jobs', function (req, res, next) {
    Job.find({}).then(function (jobs) {
        res.send(jobs)
    }).catch(next)

})

//get one job
router.get('/jobs/:id', function (req, res, next) {
    Job.findOne({ _id: req.params.id })
        .then(function (jobs) {
            res.send(jobs)
        }).catch(next)

})


//add new job
router.post('/jobs', function (req, res, next) {
    Job.create(req.body)
        .then(function (jobs) {
            res.send(jobs)
        }).catch(next)

})

//update job

router.put('/jobs/:id', function (req, res, next) {
    Job.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function () {
            Job.findOne({_id: req.params.id}).then(function(jobs) {
                res.send(jobs)
            })     
        }).catch(next)

})

//delete job 
router.delete('/jobs/:id', function (req, res, next) {
    Job.findByIdAndRemove({ _id: req.params.id })
        .then(function (jobs) {
            res.send(jobs)
        }).catch(next)

})

module.exports = router;

