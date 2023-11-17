const logRequest = (req, res, next) => {
  console.log('A Request To Path Occurred : ', req.path);
  next();
};
module.exports = logRequest;
