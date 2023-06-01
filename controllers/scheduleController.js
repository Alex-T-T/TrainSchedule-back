const db = require("../utils/db");

const getScheduleForStations = async (departure, arrival) => {

    const query = 'SELECT q.train_number train_numbers, t.train_name train_names, d.departure_date FROM ' +
        '(' +
        ' SELECT s.train_number' +
        '   FROM app.routes s JOIN app.routes e' +
        '     ON s.train_number = e.train_number' +
        '  WHERE s.station_name = :from ' +
        ' AND e.station_name = :to ' +
        ' AND s.id < e.id' +
        ' ) q' +
        '   JOIN app.schedules d' +
        ' ON q.train_number = d.train_number JOIN app.trains t' +
        ' ON q.train_number = t.train_number' +
        '  WHERE d.departure_date >= now()' +
        'AND d.departure_date <= now() + interval 7 day'

    const result = await db.query(query, {
        replacements: { from: departure, to: arrival },
        type: db.QueryTypes.SELECT
    })
    return result
}

module.exports = { getScheduleForStations }