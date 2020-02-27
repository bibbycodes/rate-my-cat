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

  it('adds a ratings to the db', async () => {
    let rating = new Rating('cdn.catimage.com', 4)
    let result = await rating.add()
    assert.equal(4, result.rating)
    assert.equal('cdn.catimage.com', result.url)
  })

  it('retrieves all ratings', async () => {
    let result = await Rating.all()
    assert.equal(result.length, 3)
  })
})