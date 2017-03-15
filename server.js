var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!222222')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})





/*


Open up your application in a preview tab by clicking Window > Share > Application > Open

To run your application run the command: 
node server.js

*/
