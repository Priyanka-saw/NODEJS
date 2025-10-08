// const sessionIdToUserIdMap = new Map();

const jwt = require('jsonwebtoken');
const secret = "Priyanka$123"; // 


function setUser(user) {
    // sessionIdToUserIdMap.set(id, user);

    return jwt.sign({
        _id: user._id,
        name: user.name,
        // email: user.email
    }, secret)
}

function getUser(token) {
    // return sessionIdToUserIdMap.get(id);

    if (!token) return null;
    try {
        const data = jwt.verify(token, secret);
        return data;
    } catch (err) {
        return null;
    }
}

function removeUser(token) {
   return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser,
    removeUser,
};