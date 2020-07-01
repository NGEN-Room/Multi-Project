const connection = require('./connection')

function getProfiles (db = connection) {
  return db('profiles')
}




module.exports = { getProfiles }