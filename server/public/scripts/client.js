console.log('in client.js');

$(document).ready(onReady);

function onReady() {
  console.log('jq');
  // Grab that data from server
  // GET /allTheQuotes

  // AJAX:
  // Asynchronous Javascript and XML
  // Tool for making HTTP network requests
  // from client-side Javascript code
  $.ajax({
    url: '/allTheQuotes',
    method: 'GET',
  })
    .then(function (quoteList) {
      // Take array of quotes
      // Loop through them
      // .append() to the DOM
      for (quote of quoteList) {
        $('#quote-list').append(`
      <li>
        <figure>
          <blockquote>
            <p>"${quote.quote}"</p>
          </blockquote>
          <figcaption>—${quote.author}</figcaption>
        </figure>
      </li>
      `);
      }
    })
    .catch(function () {
      console.log('error');
    });

  console.log('this will print before the quotes');
}
