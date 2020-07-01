const express = require('express')
const router = express.Router()

const db = require('../db/db')

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An unexpected error has occurred and we're looking into it"
  )
}

router.get('/', (req, res) => {
  return db.getProfiles()
    .then(profiles => res.json(profiles))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router