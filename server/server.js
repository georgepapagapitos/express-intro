const express = require('express');
// console.log('express', express);

// Create our app
const app = express();

const port = 3000;

// Share any files inside the 'public' folder
app.use(express.static('server/public'));

// app.get('/', function (request, response) {
//   response.send('<h1>Hello, world!</h1>');
// });

// app.get('/contact', function (req, res) {
//   res.send('<h1>Contact me at george.g.papagapitos@gmail.com</h1>');
// });

// app.get('/about', function (req, res) {
//   res.send('<h2>I am ready to code on occasion!</h2>');
// });

// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('Server started on port', 3000);
});
