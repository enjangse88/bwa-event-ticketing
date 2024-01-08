const Users = require('../../api/v1/users/model');
const { BadRequestError, Unauthorized } = require('../../errors');
const { createTokenUser, createJWT } = require('../../utils');

const signin = async (req) => {
    const { email, password } = req.body;

    if (!email || !password ){
        throw new BadRequestError('Silahkan input email dan password');
    }

    const result = await Users.findOne({ email:email });

    if(!result){
        throw new UnauthorizedError('Invalid credentials');
    }

    const isPasswordCorrect = await result.comparePassword(password);
    if(!isPasswordCorrect) {
        throw new UnauthorizedError('Invalid Credentials');
    }

    const token = createJWT({ payload: createTokenUser(result)});

    return { token, role:result.role, email: result.email };
};

module.exports = { signin };