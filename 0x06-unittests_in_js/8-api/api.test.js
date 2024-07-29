const chai = require('chai');
const request = require('request');

describe('Index Page', () => {
    it('should return status code 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  
    it('should return the correct result', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal('Welcome to the payment system!');
          done();
        });
    });
  
    // Add other tests if needed
  });
