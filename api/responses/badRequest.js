module.exports = function badRequest(error, extraInfo) {
    console.log(error);
    console.log(extraInfo);
    var request = this.req;
    var response = this.res;
    var sails = request._sails;
  
    var newError = new Error('Insufficient funds');
    newError.raw = error;
    _.extend(newError, extraInfo);
  
    sails.log.verbose('Sent "Insufficient funds" response.');
  
    return response.status(404).badRequest(newError);
}
