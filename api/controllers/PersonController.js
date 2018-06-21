/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  addEmployeeToCompany: async function (request, response) {
    var newPerson = await Person.create(request.body).fetch();
    var companyId = request.param("companyId");
    await Company.addToCollection(companyId, "employee", newPerson.id);
    response.send('{ "message": "Still in development" }');
  },

  addManagerToCompany: async function (request, response) {
    var newPerson = await Person.create(request.body).fetch();
    var companyId = request.param("companyId");
    await Company.addToCollection(companyId, "manager", newPerson.id);
    response.send('{ "message": "Still in development" }');
  },

  removeEmployeeFromCompany: async function (request, response) {
    var companyId = request.param("companyId");
    var selectedCompany = await Company.findOne({id: companyId});
    var personId = request.param("personId");
    var selectedPerson = await Person.findOne({id: personId});
    console.log(selectedCompany);
    console.log(selectedPerson);
    if (!selectedPerson) {
      response.entityNotFound(new Error("Person"), `${personId}`);
    }
    // await Company.removeFromCollection(companyId, request.param("role", "employee")).members([personId]);
    // response.send('{ "message": "Still in development" }');
  },

  removeManagerFromCompany: async function (request, response) {
    var companyId = request.param("companyId");
    var selectedCompany = await Company.findOne({id: companyId});
    var personId = request.param("personId");
    var selectedPerson = await Person.findOne({id: personId});
    await Company.removeFromCollection(companyId, request.param("role", "manager")).members([personId]);
    response.send('{ "message": "Still in development" }');
  },

};

