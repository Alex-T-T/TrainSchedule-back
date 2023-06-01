const db = require("../utils/db");

const getStationsByTrainNumber = async (trainNumber) => {

    const query = 'SELECT t.train_number , t.train_name, r.station_name  \n' +
        'FROM app.trains t JOIN app.routes r \n' +
        'ON t.train_number = r.train_number  \n' +
        'WHERE t.train_number = :trainNumber \n' +
        'ORDER BY r.id ASC '

    return await db.query(query, {
        replacements: { trainNumber: trainNumber },
        type: db.QueryTypes.SELECT
    })
}

const getAllStations = async () => {
    const query = 'SELECT id, station_name FROM app.stations ORDER BY id ASC';

    const stations = await db.query(query, { type: db.QueryTypes.SELECT });
    return stations;

};

module.exports = { getStationsByTrainNumber, getAllStations }