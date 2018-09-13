const express = require('express');
const bodyparser = require('body-parser');
const restaurantController = require('../controllers/restaurantController');
const viewController = require('../controllers/viewController');
const restaurantRouter = express.Router();
const reviewsController = require('../controllers/reviewsController');



restaurantRouter.route('/').get(restaurantController.index, viewController.showAllRestaurants, viewController.show404);
restaurantRouter.route('/new').get(viewController.createRestaurant, viewController.show404);

restaurantRouter.route('/').post(restaurantController.createRestaurant, 
(req,res) => res.redirect(`/restaurants`)
);

restaurantRouter.route('/:restaurant_id/reviews/:id').delete(reviewsController.deleteReview,  viewController.handleDelete);

module.exports = restaurantRouter;
