var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({"message":"success GETting api"});
});

router.post('/1.0/messages/send-template.json', function(req, res, next) {
  res.status(503).json({"status": "error",
  "code": 503,
  "name": "ServiceUnavailableError",
  "message": "Mandrill is currently down for planned maintenance, which we estimate to last from 1 am – 7 am EST, January 11th. You can find updates on our Mandrill Twitter page at https://twitter.com/mandrillapp"});
});

module.exports = router;
