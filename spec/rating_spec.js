process.env.NODE_ENV = 'test'
const Helper = require('../test_helpers/helpers')
const Rating = require('../models/Rating')
const assert = require('assert');
const helper = new Helper()


beforeEach(async function() {
  await helper.createTable()
  await helper.insertRatings()
});

afterEach(async function() {
  await helper.dropTable()
});

describe('Rating', () => {
  it('retrieves all ratings for an image', async () => {
    let result = await Rating.find('www.google.com')
    let entry = result.rows[0]
    assert.equal(entry.rating, 4)
  })
})