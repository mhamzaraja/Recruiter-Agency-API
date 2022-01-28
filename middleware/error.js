const ErrorResponse = require('../utils/errorResposnse');

const errorHandler = (err, req, res, next) =>{
    let error = { ...err };
    console.log(err.message);
    error.message = err.message;
    res.sendStatus(error.statusCode || 500).json({
        success: false,
        error: error.message || "Internal server Error!"
    })
}

module.exports = errorHandler;