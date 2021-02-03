$(onReady);

function onReady() {
  fetchQuotes();
  $(document).on('submit', '#new-quote-form', onSubmit);
}

function fetchQuotes() {
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
}

function onSubmit(event) {
  event.preventDefault();
  let newQuote = {
    quote: $('#quote-input').val(),
    author: $('#author-input').val(),
  };
  console.log('newQuote', newQuote);
}
