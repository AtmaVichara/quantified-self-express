const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app.js');
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

chai.use(chaiHttp);

describe('API Routes', () => {

  before((done) => {
    database.migrate.latest()
    .then(() => done())
    .catch((error) => {
      throw error;
    })
    .done();
  })

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch((error) => {
        throw error;
      })
      .done()
  })

  describe("GET /api/v1/meals", () => {

    it("should return all meals", () => {
      return chai.request(server)
        .get('/api/v1/meals')
        .then((response) => {
          response.should.have.status(200)
          response.body.length.should.equal(4)
          response.body[0].name.should.equal('breakfast')
          response.body[0].foods.length.should.equal(2)
          response.body[0].foods[0].name.should.equal('Apple')
        })
        .catch((error) => {
          throw error;
        })
    })
  })

  describe("GET /api/v1/meals/:meal_id/foods", () => {
    it("returns meal and all foods associated", () => {
      return chai.request(server)
        .get('/api/v1/meals/1/foods')
        .then((response) => {
          response.should.have.status(200)
          response.body.should.a('object')
          response.body.id.should.equal(1)
          response.body.foods.length.should.equal(2)
          response.body.foods[0].name.should.equal('Apple')
          response.body.name.should.equal('breakfast')
        })
        .catch((error) => {
          throw error;
        })
    })

    it("returns 404 for meal that does not exist", () => {
      return chai.request(server)
        .get('/api/v1/meals/343/foods')
        .then((response) => {
          response.should.have.status(404)
        })
        .catch((error) => {
          throw error;
        })
    })
  })

  describe("POST /api/v1/meals/:meal_id/foods/:id", () => {
    it("should add food to meal", () => {
      return chai.request(server)
        .post('/api/v1/meals/1/foods/18')
        .then((response) => {
          response.should.have.status(201)
          response.body.message.should.equal("Successfully added Water to breakfast")
        })
    })
    it("should return 404 for meal that does not exist", () => {
      return chai.request(server)
        .post('/api/v1/meals/343/foods/12')
        .then((response) => {
          response.should.have.status(404)
        })
        .catch((error) => {
          throw error;
        })
    })
  })

  describe("DELETE /api/v1/meals/:meal_id/foods/:id", () => {
    it("should remove food from meal", () => {
      return chai.request(server)
        .delete('/api/v1/meals/1/foods/2')
        .then((response) => {
          response.should.have.status(200)
          response.body.message.should.equal("Successfully removed Banana from breakfast")
        })
        .catch((error) => {
          throw error;
        })
    })

    it("should return 404 with meal food that does not exist", () => {
      return chai.request(server)
        .delete('/api/v1/meals/21/foods/23')
        .then((response) => {
          response.should.have.status(404)
        })
    })
  })

})
