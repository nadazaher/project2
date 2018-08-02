const express = require('express');
const cuisineController = require('../controllers/cuisineController');

const cuisineRouter = express.Router();

const showCuisine = (req,res) => {
    res.json(res.locals.cuisine);
  };

cuisineRouter.route('/:cuisine').get(cuisineController.getByCuisine, showCuisine);

module.exports = cuisineRouter;
