module.exports = function entityNotFound(err, extraInfo) {
  console.log(err);
  console.log(extraInfo);
  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  var newError = new Error('Insufficient funds');
  newError.raw = err;
  _.extend(newError, extraInfo);

  sails.log.verbose('Sent "Insufficient funds" response.');

  return response.badRequest(newError);
}