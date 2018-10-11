const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_controller = require('../controllers/book.controller');


// a simple test url to check that all of our files are communicating correctly.
//router.get('/test', book_controller.test);

router.get('/',book_controller.book_all);

router.post('/create', book_controller.book_create);
router.get('/:id', book_controller.book_details);
module.exports = router;