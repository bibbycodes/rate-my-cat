const DbConn = require('../models/DbConn')
const fs = require('fs')
cwd = process.cwd()

class test_helper {
  constructor() {
    this.createTableQuery = fs.readFileSync(`${cwd}/db/migrations/02_CREATE_TABLE_RATINGS.sql`).toString()
    this.insertRatingsQuery = fs.readFileSync(`${cwd}/db/migrations/03_INSERT_INTO_RATINGS.sql`).toString()
    this.dropTableQuery = fs.readFileSync(`${cwd}/db/migrations/04_DROP_TABLE_RATINGS.sql`).toString()
  }

  async createTable() {
    try {
      let db = new DbConn()
      let result = await db.query(this.createTableQuery)
      return result
    } catch (err) {
      console.error(err)
    }
  }
  
  async dropTable() {
    try {
      let db = new DbConn()
      let result = await db.query(this.dropTableQuery)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async insertRatings() {
    try {
      let db = new DbConn()
      let result = await db.query(this.insertRatingsQuery)
      return result
    } catch (err) {
      console.error(err)
    }
  }

}


module.exports = test_helper