
const gconf = require('gconf/default');
const { expect } = require('chai');
const request = require('supertest');

const app = require('../server');

describe("API", () => {

  it("/config", () => 
    request(app)
      .get('/config')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).to.deep.equal(gconf.get());
      })
  );
});