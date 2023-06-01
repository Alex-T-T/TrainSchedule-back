const sequelize = require('../utils/db');
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

module.exports = { Trains, Stations, Routes, Schedule }
