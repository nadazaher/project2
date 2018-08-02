const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const restaurantRouter = express.Router();

const showJSON = (req,res) => {
    res.json(res.locals.data);
  };


restaurantRouter.route('/').get(restaurantController.index, showJSON);

restaurantRouter.route('/').post(restaurantController.createRestaurant, showJSON);

module.exports = restaurantRouter;
