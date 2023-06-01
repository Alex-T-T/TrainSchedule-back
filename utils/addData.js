const {Trains, Stations, Routes, Schedule} = require('../models/models')
const {Sequelize} = require("sequelize");
const sequelize = require('./db')

const createDatabase = async () => {
    const sequalize = new Sequelize(
        '',
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            dialect: 'mysql',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        })
    await sequalize.query('CREATE DATABASE IF NOT EXISTS ' + process.env.DB_NAME)
};

// ======================================================
//           populate STATIONS table with data
// ======================================================

const stationList = ['Kharkiv', 'Myrhorod',
    'Poltava', 'Dnipro',
    'Kyiv', 'Odesa',
    'Ternopil', 'Chernitsi',
    'Rivne', 'Kryvyi-Rih',
    'Lviv', 'Ivano-Frankivsk',
    'Kherson', 'Zaporizya',
    'Zytomyr', 'Uman', 'Lutsk',
    'Uzhorod', 'Bila-Tserkva']

const addStations = async () => {
    try {
        for (let i = 0; i < stationList.length; i++) {
            const station_name = stationList[i]

            await Stations.findOrCreate({
                where: {station_name},
                defaults: {station_name}
            });
        }
        console.log('🟢🟢🟢Stations added successfully.🟢🟢🟢');
    } catch (error) {
        console.error('🔴🔴🔴Error adding stations:🔴🔴🔴', error);
    }
};

// ======================================================
//           populate TRAINS table with data
// ======================================================

const trainList = [{train_number: 101, train_name: 'Rabbit Express'},
    {train_number: 48, train_name: 'Dog Express'},
    {train_number: 43, train_name: 'Cat Express '},
    {train_number: 99, train_name: 'Aligator Express'},
    {train_number: 345, train_name: 'Mouse Express'}
]

const addTrains = async () => {
    try {
        for (let i = 0; i < trainList.length; i++) {
            const {train_number, train_name} = trainList[i];
            await Trains.findOrCreate({
                where: {
                    train_number,
                    train_name
                },
                defaults: {
                    train_number,
                    train_name
                }

            });
        }
        console.log('🟢🟢🟢Trains added successfully.🟢🟢🟢');
    } catch (error) {
        console.error('🔴🔴🔴Error adding trains:🔴🔴🔴', error);
    }
};

// ======================================================
//           populate SCHEDULES table with data
// ======================================================

const schedulesList = [
    {train_number: 101, departure_date: new Date()},
    {train_number: 101, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)},
    {train_number: 101, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)},
    {train_number: 101, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)},
    {train_number: 101, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)},
    {train_number: 101, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)},
    {train_number: 101, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)},
    {train_number: 101, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date()},
    {train_number: 48, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)},
    {train_number: 48, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date()},
    {train_number: 43, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)},
    {train_number: 43, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)},
];

const addSchedules = async () => {
    try {

        for (let i = 0; i < schedulesList.length; i++) {
            const {train_number, departure_date} = schedulesList[i];
            await Schedule.findOrCreate({
                where: {
                    train_number,
                    departure_date,
                },
                defaults: {
                    train_number,
                    departure_date,
                }
            });
        }
        console.log('🟢🟢🟢Schedules added successfully.🟢🟢🟢');
    } catch (error) {
        console.error('🔴🔴🔴Error adding schedules:🔴🔴🔴', error);
    }
};

// ======================================================
//           populate ROUTES table with data
// ======================================================
const routeList = [
    {train_number: 101, station_name: 'Kharkiv'},
    {train_number: 101, station_name: 'Poltava'},
    {train_number: 101, station_name: 'Myrhorod'},
    {train_number: 101, station_name: 'Kyiv'},
    {train_number: 101, station_name: 'Ternopil'},
    {train_number: 101, station_name: 'Rivne'},
    {train_number: 101, station_name: 'Lviv'},
    {train_number: 48, station_name: 'Kharkiv'},
    {train_number: 48, station_name: 'Poltava'},
    {train_number: 48, station_name: 'Myrhorod'},
    {train_number: 48, station_name: 'Kyiv'},
    {train_number: 48, station_name: 'Bila-Tserkva'},
    {train_number: 48, station_name: 'Uman'},
    {train_number: 48, station_name: 'Odesa'},
    {train_number: 43, station_name: 'Dnipro'},
    {train_number: 43, station_name: 'Kryvyi-Rih'},
    {train_number: 43, station_name: 'Kherson'},
    {train_number: 48, station_name: 'Odesa'},
];

const addRoutes = async () => {
    try {
        for (let i = 0; i < routeList.length; i++) {
            const {train_number, station_name} = routeList[i];

            await Routes.findOrCreate({
                where: {
                    train_number,
                    station_name,
                },
                defaults: {
                    train_number,
                    station_name,
                },
            });
        }

        console.log('🟢🟢🟢Routes added successfully.🟢🟢🟢');
    } catch (error) {
        console.error('🔴🔴🔴Error adding routes:🔴🔴🔴', error);
    }
};

const initDbWithData = async () => {
    await createDatabase()
    await sequelize.authenticate();
    await sequelize.sync();
    await addTrains();
    await addStations();
    await addRoutes();
    await addSchedules();

};

module.exports = {initDbWithData}