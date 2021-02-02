const express = require('express');
// console.log('express', express);

// Create our app
const app = express();

const port = 3000;

// Share any files inside the 'public' folder
app.use(express.static('server/public'));

// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('Server started on port', 3000);
});
