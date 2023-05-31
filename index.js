require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
// const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const { addTrains, addStations, addRoutes, addSchedules } = require('./utils/addData')

const PORT = process.env.PORT || 5005;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))

app.use('/', router)


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`🟢🟢🟢Server started on port ${PORT}🟢🟢🟢`));
        addTrains();
        addStations();
        addRoutes();
        addSchedules();
    } catch (error) {
        console.log('🔴🔴🔴error:🔴🔴🔴', error);
        process.exit(1)
    }
}

start()