var express = require('express');
var passport = require('passport')
const furniture_controllers = require('../controllers/furniture')
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', furniture_controllers.furniture_view_all_Page);

router.get('/detail', furniture_controllers.furniture_view_one_Page);

router.get('/create', secured, furniture_controllers.furniture_create_Page);

router.get('/update', secured, furniture_controllers.furniture_update_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});


router.get('/delete', secured, furniture_controllers.furniture_delete_Page);

module.exports = router;
