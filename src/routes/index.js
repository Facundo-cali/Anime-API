var express = require('express');
var router = express.Router();
const moviesControllers = require('../controllers/moviesControllers')

/* GET home page. */
router.get('/', moviesControllers.all);
router.get('/detail/:id', moviesControllers.detail); 
router.get('/favorites', moviesControllers.favorites); 

module.exports = router;
