const express = require('express');
// const { scheduleController } = require('../controllers/scheduleController')

const router = express.Router()

// router.get('/schedule', scheduleController)

router.get('/', (req, res) => {
    // console.log('req.body => ', req.body);
    const { arrival, depart } = req.body

    if (!arrival || !depart) {
        res.status(400).json('Empty fields of arrival or depart stations. Select them and try again!')
    }

    // const schedule = await find schedule from depart to arrival


    console.log('depart: ', depart);
    console.log('arrival: ', arrival);
    res.status(200).json('Here will be your schedule')
})




module.exports = router