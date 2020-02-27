const DbConn = require('./DbConn')

class Rating {
  constructor (url, rating) {
    this.url = url
    this.rating = rating
  }

  static async find(url) {
    let db = new DbConn()
    let result = await db.query(`SELECT * FROM ratings WHERE url ='${url}';`)
    return result
  }

  async add() {
    let db = new DbConn()
    let result = await db.query(
      `INSERT INTO ratings (rating, url) 
      VALUES (${this.rating}, '${this.url}') 
      RETURNING id, rating, url;`
      )
    return result.rows[0]
  }
}

module.exports = Rating