const express = require('express');
// const yelp = require('yelp-fusion');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const server = express();

const port = 8000;
server.listen(port, () => {
  console.log(`We are live on ${port}`);
});
server.use(bodyParser.json());
// const client = yelp.client(
//   'zyuGznggrrXXZwEMlloPfpIsEM6VAm05k9n9whI629Tn42sGWUkO6UPuDks1-P7vE06DFfbwZxQgb_9gFN-3P84ygl4T6iPWZhZdMpjPzFnoNoH7q7ut2dl5vYKbWnYx'
// );

server.get('/place', (req, res) => {
  const { zip } = req.query;
  if (zip) {
    fetch(`https://api.yelp.com/v3/businesses/search?location=${zip}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer zyuGznggrrXXZwEMlloPfpIsEM6VAm05k9n9whI629Tn42sGWUkO6UPuDks1-P7vE06DFfbwZxQgb_9gFN-3P84ygl4T6iPWZhZdMpjPzFnoNoH7q7ut2dl5vYKbWnYx',
      },
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((json) => {
        res.status(200);
        res.send(json);
      })
      .catch((err) => err);
  }
});
