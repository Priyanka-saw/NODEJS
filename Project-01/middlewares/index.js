const fs = require('fs');

function logReqRes(filename) {

  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n New Request at ${new Date().toISOString()} : ${req.path} : ${
        req.method
      } : ${req.ip}`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = {
  logReqRes,
};