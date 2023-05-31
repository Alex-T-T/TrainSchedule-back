const express = require('express');
const { getStationController } = require('../controllers/stationController')

const router = express.Router()



router.get('/', getStationController)




module.exports = router