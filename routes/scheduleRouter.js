const express = require('express');
const db = require('../utils/db')
const scheduleController = require('../controllers/scheduleController')

const router = express.Router()

// router.post('/', async (req, res) => {

//     const { arrival, depart } = req.body

router.get('/', async (req, res) => {
    const { arrival, depart } = req.query
    if (!arrival || !depart) {
        res.status(400).json({ "message": 'Empty fields of arrival or depart stations. Select them and try again!' })
    }

    const result = await scheduleController.getScheduleForStations(depart, arrival)
    res.status(200).json(result)
})

module.exports = router