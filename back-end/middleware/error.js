const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode
      ? httpStatus.BAD_REQUEST
      : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || String(httpStatus[statusCode]);
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  // If the environment is production, then the error message is not sent to the client.
  //   instead, a generic message is sent.
  if (process.env.NODE_ENV === "production") {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = String(httpStatus[httpStatus.INTERNAL_SERVER_ERROR]);
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };

  res.status(statusCode).send(response);
};

module.exports = { errorConverter, errorHandler };
