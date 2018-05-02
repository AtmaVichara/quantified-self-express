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

  describe("GET /api/v1/foods" , () => {

    it("should return all foods", () => {
      return chai.request(server)
        .get('/api/v1/foods')
        .then((response) => {
          response.should.have.status(200);
          response.body.length.should.equal(21);
          response.body[0].name.should.equal('Apple');
          response.body[0].calories.should.equal(120)
        })
        .catch((error) => {
          throw error
        })

    })

  })


});
