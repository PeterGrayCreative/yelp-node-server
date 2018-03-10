const fetch = require('node-fetch');
const config = require('../../config');

const key = config.apiKey;
const BUSINESS_SEARCH = 'https://api.yelp.com/v3/businesses/search?';

function getResults(location, search_term, sort_by) {
  return fetch(
    BUSINESS_SEARCH +
      'location=' +
      location +
      '&term=' +
      search_term +
      '&sort_by=' +
      sort_by,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: key,
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => err);
}

module.exports = {
  getResults,
};
