const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { PORT, FLIGHT_SERVICE_PATH } = require('./config/serverConfig');
const aipRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', aipRoutes);


    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
    })
}

setupAndStartServer();