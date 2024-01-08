const createTokenUser = (user) => {
    return {
        name: user.name,
        userID: user._id,
        role: user.role,
        email: user.email,
        organizer: user.organizer,
    };
};


module.exports = { createTokenUser };