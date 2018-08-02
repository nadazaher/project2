const express = require('express');
const locationController = require('../controllers/locationController');

const locationRouter = express.Router();

  const showLocation = (req,res) => {
    res.json(res.locals.location);
  };

locationRouter.route('/:location').get(locationController.getByLocation, showLocation);

module.exports = locationRouter;
