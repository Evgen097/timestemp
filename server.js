var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!222222')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})





/*

Check your git status by entering the command 'git status' into the console.
Add your files with the command git "add ..."
Commit your changes with "git commit -m "initial commit".

Open up your application in a preview tab by clicking Window > Share > Application > Open

To run your application run the command: 
node server.js

*/
