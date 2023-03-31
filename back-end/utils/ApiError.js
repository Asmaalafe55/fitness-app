// this is a class that extends the Error class
// and makes sure that the stack trace is captured
// the stack trace being the line of code that caused the error
class ApiError extends Error {
  constructor(statusCode, message, stack) {
    super(message);

    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  statusCode;
}

module.exports = ApiError;
