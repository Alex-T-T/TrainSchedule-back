const express = require('express');
const scheduleRouter = require('./scheduleRouter')
const stationRouter = require('./stationRouter')

const router = express.Router()

router.use('/schedule', scheduleRouter)
router.use('/station', stationRouter)

router.use((req, res) => {
    res.status(404).json({ message: '❌❌❌Not found.❌❌❌' });
});

router.use((err, req, res, next) => {
    const { status = 500, message = "❌❌❌ BOOM Internal server error!❌❌❌" } = err;
    res.status(status).json({ message });
});

module.exports = router