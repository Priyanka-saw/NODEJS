const { getUser } = require('../service/auth');

// Authentication
function checkAuthenticated(req, res, next) {
    const token = req.cookies?.token;
    req.user = null;
    if (!token) return next();
    const user = getUser(token);
    req.user = user;
    return next();
}


// Authorization
function restrictTo(roles) {
    return function (req, res, next) {
        if (!req.user || !roles.includes(req.user.role)) return res.redirect('/login');
       
        if(!roles.includes(req.user.role))
            return res.end("Unauthorized Access");
        next();
    }
}

// async function restrictToLoggedinUserOnly(req, res, next) {
//     const userid = req.cookies.uid;
//     if (!userid) {
//         return res.redirect('/login');
//     }
//     const user = await getUser(userid);
//     if (!user) {
//         return res.redirect('/login');
//     }
//     req.user = user;
//     next();
// }
// async function checkAuth(req, res, next) {
//     const userid = req.cookies.uid;

//     const user = getUser(userid);

//     req.user = user;
//     next();
// }



module.exports = {
    // restrictToLoggedinUserOnly,
    // checkAuth,

    checkAuthenticated,
    restrictTo
};