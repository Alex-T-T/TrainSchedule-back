const { Stations } = require('../models/models')
const RequestError = require('../utils/requestError')

const getStationController = async (req, res, next) => {
    // console.log('req.body => ', req.body);
    const { value } = req.body

    // if (!value) {
    //     res.status(400).json('Empty fields of arrival or depart stations. Select them and try again!')
    // }
    // const station = await serch value in DB
    // const station = { id: 3, name: "Bobryk" }

    try {
        const stations = await Stations.findAll()
        console.log('stations: ', stations);

        res.status(200).json(stations)
    } catch (error) {
        next(RequestError(500, 'Something wrong!'))
    }



}

module.exports = { getStationController }