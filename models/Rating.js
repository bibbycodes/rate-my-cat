const DbConn = require('./DbConn')

class Rating {
  constructor (id, url, rating) {
    this.id = id
    this.url = url
    this.rating = rating
  }

  static async find(url) {
    let db = new DbConn()
    let result = db.query(`SELECT * FROM ratings WHERE url ='${url}';`)
    return result
  }
}

module.exports = Rating