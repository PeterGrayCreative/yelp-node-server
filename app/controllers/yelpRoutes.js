const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

const { getResults } = require('../models/getResults.js');

router.get('/place', (req, res) => {
  const { location, search_term, sort_by } = req.query;
  if (location) {
    getResults(location, search_term, sort_by)
      .then((results) => {
        console.log(results)
        res.status(STATUS_SUCCESS);
        res.send(results);
      })
      .catch((err) => { err: err });
  }
});

module.exports = router;
