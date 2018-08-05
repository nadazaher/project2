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
  // viewController.createRestaurant,
//replace showJSON with whole function to res.render - this is to redirect
(req,res) => res.redirect(`/restaurants`)
// res.locals.id = id
);

//redirect anything for post/put/delete
//pencil symbol - link to edit view page
module.exports = restaurantRouter;
