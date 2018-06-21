/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  addPersonToCompany: async function (request, response) {
    var newPerson = await Person.create(request.body).fetch();
    var companyId = request.param("companyId");
    await Company.addToCollection(companyId, 'manager', newPerson.id);
    response.send('{ "message": "Still in development" }');
  },

};

