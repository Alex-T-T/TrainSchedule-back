const sequelize = require('../db');
const { DataTypes } = require('sequelize');


// =================================================================================================
const Trains = sequelize.define('trains', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, },
    train_number: { type: DataTypes.INTEGER(10), allowNull: false, },
    train_name: { type: DataTypes.STRING(255), allowNull: false, },
});

const Stations = sequelize.define('stations', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    station_name: { type: DataTypes.STRING(255), allowNull: false },
});

const Routes = sequelize.define('routes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    station_name: { type: DataTypes.STRING(255), allowNull: false },
    train_number: { type: DataTypes.INTEGER(10), allowNull: false, },
})

const Schedule = sequelize.define('schedules', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    train_number: { type: DataTypes.INTEGER(10), allowNull: false, },
    departure_date: { type: DataTypes.DATEONLY },
});

// Trains.hasMany(Schedule, { foreignKey: 'train_number' });
// Schedule.belongsTo(Trains, { foreignKey: 'train_number' });

// Stations.belongsToMany(Trains, { through: Routes, foreignKey: 'station_name' });
// Trains.belongsToMany(Stations, { through: Routes, foreignKey: 'train_number' });

Trains.hasMany(Schedule, { foreignKey: 'trainId', sourceKey: 'id' });
Schedule.belongsTo(Trains, { foreignKey: 'trainId', targetKey: 'id' });


// //  ======================================================
// const stationList = ['Kharkiv', 'Myrhorod',
//     'Poltava', 'Dnipro',
//     'Kyiv', 'Odesa',
//     'Ternopil', 'Chernitsi',
//     'Rivne', 'Kryvyi-Rih',
//     'Lviv', 'Ivano-Frankivsk',
//     'Kherson', 'Zaporizya',
//     'Zytomyr', 'Uman', 'Lutsk',
//     'Uzhorod', 'Bila-Tserkva']

// const addStations = async () => {
//     try {
//         for (let i = 0; i < stationList.length; i++) {
//             const station_name = stationList[i]

//             await Stations.findOrCreate({
//                 where: { station_name },
//                 defaults: { station_name }
//             });
//         }
//         console.log('Stations added successfully.');
//     } catch (error) {
//         console.error('Error adding stations:', error);
//     }
// };

// addStations();
// // ======================================================

// // ======================================================

// const trainList = [{ train_number: 101, train_name: 'Rabbit Express' },
// { train_number: 48, train_name: 'Dog Express' },
// { train_number: 43, train_name: 'Cat Express ' },
// { train_number: 99, train_name: 'Aligator Express' },
// { train_number: 345, train_name: 'Mouse Express' }
// ]

// const addTrains = async () => {
//     try {
//         for (let i = 0; i < trainList.length; i++) {
//             const { train_number, train_name } = trainList[i];
//             await Trains.findOrCreate({
//                 where: {
//                     train_number,
//                     train_name
//                 },
//                 defaults: {
//                     train_number,
//                     train_name
//                 }

//             });
//         }
//         console.log('Trains added successfully.');
//     } catch (error) {
//         console.error('Error adding trains:', error);
//     }
// };

// addTrains();
// // ======================================================

// // ======================================================

// const schedulesList = [
//     { train_number: 101, departure_date: new Date() },
//     { train_number: 101, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date() },
//     { train_number: 48, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date() },
//     { train_number: 43, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
// ];

// const addSchedules = async () => {
//     try {

//         for (let i = 0; i < schedulesList.length; i++) {
//             const { train_number, departure_date } = schedulesList[i];
//             await Schedule.findOrCreate({
//                 where: {
//                     train_number,
//                     departure_date,
//                 },
//                 defaults: {
//                     train_number,
//                     departure_date,
//                 }
//             });
//         }
//         console.log('Schedules added successfully.');
//     } catch (error) {
//         console.error('Error adding schedules:', error);
//     }
// };

// addSchedules();
// // ======================================================

// // ======================================================
// const routeList = [
//     { train_number: 101, station_name: 'Kharkiv' },
//     { train_number: 101, station_name: 'Poltava' },
//     { train_number: 101, station_name: 'Myrhorod' },
//     { train_number: 101, station_name: 'Kyiv' },
//     { train_number: 101, station_name: 'Ternopil' },
//     { train_number: 101, station_name: 'Rivne' },
//     { train_number: 101, station_name: 'Lviv' },
//     { train_number: 48, station_name: 'Kharkiv' },
//     { train_number: 48, station_name: 'Poltava' },
//     { train_number: 48, station_name: 'Myrhorod' },
//     { train_number: 48, station_name: 'Kyiv' },
//     { train_number: 48, station_name: 'Bila-Tserkva' },
//     { train_number: 48, station_name: 'Uman' },
//     { train_number: 48, station_name: 'Odesa' },
//     { train_number: 43, station_name: 'Dnipro' },
//     { train_number: 43, station_name: 'Kryvyi-Rih' },
//     { train_number: 43, station_name: 'Kherson' },
//     { train_number: 48, station_name: 'Odesa' },
// ];

// const addRoutes = async () => {
//     try {
//         for (let i = 0; i < routeList.length; i++) {
//             const { train_number, station_name } = routeList[i];

//             await Routes.findOrCreate({
//                 where: {
//                     train_number,
//                     station_name,
//                 },
//                 defaults: {
//                     train_number,
//                     station_name,
//                 },
//             });
//         }

//         console.log('Routes added successfully.');
//     } catch (error) {
//         console.error('Error adding routes:', error);
//     }
// };

// addRoutes();


module.exports = { Trains, Stations, Routes, Schedule }


// // //==================================================

// const Station = sequelize.define('Station', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     // Додаткові поля для станції
// });


// const Train = sequelize.define('Train', {
//     number: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
//     // Додаткові поля для поїзда
// });

// const Schedule = sequelize.define('Schedule', {
//     departureTime: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     arrivalTime: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     // Додаткові поля для розкладу
// });


// Station.hasMany(Schedule, { as: 'DepartureStation', foreignKey: 'departureStationId' });
// Station.hasMany(Schedule, { as: 'ArrivalStation', foreignKey: 'arrivalStationId' });
// Train.hasMany(Schedule);
// Schedule.belongsTo(Station, { as: 'DepartureStation', foreignKey: 'departureStationId' });
// Schedule.belongsTo(Station, { as: 'ArrivalStation', foreignKey: 'arrivalStationId' });
// Schedule.belongsTo(Train);


// module.exports = {
//     Station, Train, Schedule
// }

// // ======================================================
// const stationList = ['Kharkiv', 'Myrhorod',
//     'Poltava', 'Dnipro',
//     'Kyiv', 'Odesa',
//     'Ternopil', 'Chernitsi',
//     'Rivne', 'Kryvyi-Rih',
//     'Lviv', 'Ivano-Frankivsk',
//     'Kherson', 'Zaporizya',
//     'Zytomyr', 'Uman', 'Lutsk',
//     'Uzhorod', 'Bila-Tserkva']

// const addStations = async () => {
//     try {
//         for (let i = 0; i < stationList.length; i++) {
//             const name = stationList[i]

//             await Station.findOrCreate({
//                 where: { name },
//                 defaults: { name }
//             });
//         }
//         console.log('🟢🟢🟢Stations added successfully.🟢🟢🟢');
//     } catch (error) {
//         console.error('🔴🔴🔴Error adding stations:🔴🔴🔴', error);
//     }
// };

// addStations();


// const trainList = [{ number: 101, name: 'Rabbit Express' },
// { number: 48, name: 'Dog Express' },
// { number: 43, name: 'Cat Express ' },
// { number: 99, name: 'Aligator Express' },
// { number: 345, name: 'Mouse Express' }
// ]

// const addTrains = async () => {
//     try {
//         for (let i = 0; i < trainList.length; i++) {
//             const { number, name } = trainList[i];
//             await Train.findOrCreate({
//                 where: {
//                     number,
//                     name
//                 },
//                 defaults: {
//                     number,
//                     name
//                 }

//             });
//         }
//         console.log('🟢🟢🟢Trains added successfully.🟢🟢🟢');
//     } catch (error) {
//         console.error('🔴🔴🔴Error adding trains:🔴🔴🔴', error);
//     }
// };

// addTrains();

// const schedulesList = [
//     { departureTime: new Date(), arrivalTime: new Date(), departureStationId: 11, arrivalStationId: 1, TrainId: 1 }
//     { train_number: 101, departure_date: new Date() },
//     { train_number: 101, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
//     { train_number: 101, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date() },
//     { train_number: 48, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
//     { train_number: 48, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date() },
//     { train_number: 43, departure_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
//     { train_number: 43, departure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
// ];



// const addSchedules = async () => {
//     try {

//         for (let i = 0; i < schedulesList.length; i++) {
//             const { train_number, departure_date } = schedulesList[i];
//             await Schedule.findOrCreate({
//                 where: {
//                     train_number,
//                     departure_date,
//                 },
//                 defaults: {
//                     train_number,
//                     departure_date,
//                 }
//             });
//         }
//         console.log('Schedules added successfully.');
//     } catch (error) {
//         console.error('Error adding schedules:', error);
//     }
// };

// addSchedules();