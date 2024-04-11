var express = require('express');
const furniture_controllers = require('../controllers/furniture')
var router = express.Router();

/* GET home page. */
router.get('/', furniture_controllers.furniture_view_all_Page);

router.get('/detail', furniture_controllers.furniture_view_one_Page);

router.get('/create', furniture_controllers.furniture_create_Page);

router.get('/update', furniture_controllers.furniture_update_Page);

router.get('/delete', furniture_controllers.furniture_delete_Page);

module.exports = router;
