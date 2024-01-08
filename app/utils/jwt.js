const jwt = require('jsonwebtoken');
const {
    jwtSecret,
    jwtExpiration,
} = require('../config');

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: jwtExpiration,
    });
    return token;
}


const isTokenValid = ({ token }) => jwtVerify(token, jwtSecret);


module.exports = {
    createJWT,
    isTokenValid,

};