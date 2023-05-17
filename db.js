const { Database } = require('sqlite3');

const db = new Database('sample.db');

/**
 * 
 * @param {string} query 
 * @param {any[]} param 
 * @returns any[]
 */
const all = (query, param) => {
  return new Promise((resolve, reject) => {
    db.all(query, param, (err, rows) => {
      if(err) {
        reject(err);
      } else {
        resolve(rows);
      }
    })
  })
}

/**
 * 
 * @param {string} query 
 * @param {any[]} param 
 * @returns any
 */
const run = (query, param) => {
  return new Promise((resolve, reject) => {
    db.run(query, param, (err, rows) => {
      if(err) {
        reject(err);
      } else {
        resolve(rows);
      }
    })
  })
}

module.exports = {
  all,
  run
}