const CrudService = require('./city-service');
const { AirportRespository } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airportRespository = new AirportRespository();
        super(airportRespository);
    }
}

module.exports = AirportService;