var wegalogic = require('wegalogic')

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<html><body>'
    + wegalogic.constants.powerConsumptionPerPerson
    + '<br>' + req.url
    + '<br>' + req.params[0]
    + '<br>' + req.hostname
    + '<br>' + req.method
    + '</body></html>')
})

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
