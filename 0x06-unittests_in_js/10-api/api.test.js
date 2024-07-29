const request = require('request');
const expect = require('chai').expect;

describe('Index page', function () {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };
  it('check correct status code', function (done) {
    request(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('check correct content', function (done) {
    request(options, function (err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });
  it('check correct content length', function (done) {
    request(options, function (err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart page', function () {
  it('check status code for correct url', function (done) {
    request.get('http://localhost:7865/cart/1', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  })
  it('check status code for incorrect url', function (done) {
    request.get('http://localhost:7865/cart/abc', function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  })
})
