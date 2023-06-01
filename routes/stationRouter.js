const express = require('express');
const stationController = require("../controllers/stationController");
const RequestError = require('../utils/requestError')
const router = express.Router()


router.get('/', async (req, res, next) => {
    try {
        const result = await stationController.getAllStations()
        res.status(200).json(result)
    } catch (error) {
        next(RequestError(500, 'Something wrong!'))
    }
})

router.get('/', async (req, res, next) => {
    const { trainNumber } = req.query

    if (!trainNumber) {
        res.status(400).json({ "message": 'Empty trainNumber parameter' })
    }

    try {
        const result = await stationController.getStationsByTrainNumber(trainNumber)
        res.status(200).json(result)
    } catch (error) {
        next(RequestError(500, 'Something wrong!'))
    }
})

module.exports = router