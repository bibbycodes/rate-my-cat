const app = require('../server.js')
const request = require('supertest')
const assert = require('assert')
process.env.NODE_ENV = 'test'

describe('server routes', () => {
  describe('server routes', () => {
    it('returns 50 results when hitting /cats', (done) => {
      request(app)
        .get('/cats')
        .end((err, res) => {
          assert(res.body.length == 50) 
          done()
        })
    })

    it('returns 1 result when hitting /cats/random', (done) => {
      request(app)
        .get('/cats/random')
        .end((err, res) => {
          assert(res.body.length == 1) 
          done()
        })
    })
  })
}) 