const express = require('express');
// console.log('express', express);
const quotes = require('./modules/quotes');

// Create our app
const app = express();

const port = 5000;

// Share any files inside the 'public' folder
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint
app.get('/quotes', function (request, response) {
  // Logic to handle API request
  console.log('GET request');
  response.send(quotes.getNextQuote());
});

app.get('/allTheQuotes', function (request, response) {
  console.log('GET /allTheQuotes');
  response.send(quotes.quotesList);
});

app.post('/quotes', function (request, response) {
  let quote = request.body.quote_to_add;
  console.log('author', quote.author);
  console.log('quote', quote.quote);

  quotes.addQuote(quote);
  response.sendStatus(200);
});

// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('Server started on port', 5000);
});
