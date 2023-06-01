require('dotenv').config()
const express = require('express');
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const { initDbWithData } = require('./utils/addData')

const PORT = process.env.PORT || 5005;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))

app.use('/', router)

const start = async () => {
    // init database and populate with data
    try {
        await initDbWithData()
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

    } catch (error) {
        console.log('Error occurred initializing DB :', error);
    }
}

start()