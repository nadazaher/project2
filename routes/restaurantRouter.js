const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const restaurantRouter = express.Router();

const showJSON = (req,res) => {
    res.json(res.locals.data);
  };

// const showLocation = (req,res) => {
//     res.json(res.locals.location);
//   };

// const showCuisine = (req,res) => {
//     res.json(res.locals.cuisine);
//   };
  
const handle404 = (err, req, res, next) => {
    console.error(err);
    res.sendStatus(404);
};

restaurantRouter.route('/').get(restaurantController.index, showJSON);
// restaurantRouter.route('/:location').get(restaurantController.getByLocation, showLocation);
// restaurantRouter.route('/:cuisine').get(restaurantController.getByCuisine, showCuisine);

restaurantRouter.route('/').post(restaurantController.createRestaurant, showJSON);

module.exports = restaurantRouter;
