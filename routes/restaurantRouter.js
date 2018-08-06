const express = require('express');
const bodyparser = require('body-parser');
const restaurantController = require('../controllers/restaurantController');
const viewController = require('../controllers/viewController');
const restaurantRouter = express.Router();

// const showJSON = (req,res) => {
//     res.json(res.locals.data);
//   };


restaurantRouter.route('/').get(restaurantController.index, viewController.showAllRestaurants, viewController.show404);
// add filter here too viewController.filterRestaurant?
restaurantRouter.route('/new').get(viewController.createRestaurant, viewController.show404);

restaurantRouter.route('/').post(restaurantController.createRestaurant, 
(req,res) => res.redirect(`/restaurants`)
);

module.exports = restaurantRouter;
