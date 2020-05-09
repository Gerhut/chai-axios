const test = require('ava')
const chaiAxios = require('.')
const chai = require('chai')

chai.use(chaiAxios)

test('should pass test', t => t.notThrowsAsync(
  chai.axios((req, res) => res.end())
    .get('/').then(response =>
      chai.expect(response).to.include({ status: 200 }))))
test('should fail test', t => t.notThrowsAsync(
  chai.axios((req, res) => {
    res.statusCode = 400
    res.end()
  }).get('/').catch(error =>
    chai.expect(error).to.nested.include({ 'response.status': 400 }))))
