/*******************************************************************************************************
*                                                                                                      *
*           File name     :  index.js                                                               *
*           Student name :  Huzaifah Mahifa                                                           *
*           StudentID     :  300747824                                                                 *
*           Date  :  10/26/2021                                                                         *
*                                                                                                      *
********************************************************************************************************/
// Import required libraries
var express = require('express');
var router = express.Router();


/* GET Home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET Home page. */
router.get("/home", function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET Service page. */
router.get("/services", function(req, res, next) {
    res.render('services', { title: 'Services' });
});
/* GET Project page. */
router.get("/projects", function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});
/* GET About page. */
router.get("/about", function(req, res, next) {
    res.render('about', { title: 'About Me' });
});
/* GET Contact page. */
router.get("/contact", function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
