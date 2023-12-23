const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class BadRequest extends CustomAPIError {
    constructor(message){
        super(message);
        this.statusCode = Status.Codes.BAD_REQUEST;
    }
}

module.exports = BadRequest;