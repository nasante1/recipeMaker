var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next()
});

router.use('/', (req,res)=> {
  res.send(req.body.test)
});

module.exports = router;
