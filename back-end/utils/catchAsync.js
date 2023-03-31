// this is a wrapper function that will catch any errors that are thrown in the async function
const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log(err.message, "Error!");
    next(err);
  });

module.exports = catchAsync;
