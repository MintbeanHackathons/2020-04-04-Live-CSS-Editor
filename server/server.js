const express = require("express");
const bodyParser = require('body-parser');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 2020;
}
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});