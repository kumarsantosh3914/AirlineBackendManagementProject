const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const aipRoutes = require('./routes/index');

const db = require('./models/index');


const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', aipRoutes);
    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }

        // const u1 = await User.findByPk(4);
        // const r1 = await Role.findByPk(1);
        // // u1.addRole(r1);
        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
    });
};

prepareAndStartServer();