const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Something went wrong',
        explanation = 'Service layer error',
        statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        this.name = "ServiceError";
        this.message = message;
        this.explanation = explanation;
        this.statusCodes = statusCodes;
    }
}

module.exports = ServiceError;