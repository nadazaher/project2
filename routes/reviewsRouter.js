const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const reviewsRouter = express.Router();

const showJSON = (req,res) => {
    res.json(res.locals.data);
  };

const showId = (req,res) => {
    res.json(res.locals.id);
  };

  
const handle404 = (err, req, res, next) => {
    console.error(err);
    res.sendStatus(404);
};

reviewsRouter.route('/').get(reviewsController.index, showJSON);
reviewsRouter.route('/:id').get(reviewsController.getById, showId);
reviewsRouter.route('/:id').delete(reviewsController.deleteReview);
reviewsRouter.route('/:id').put(reviewsController.updateReview, showJSON);
reviewsRouter.route('/').post(reviewsController.createReview, showJSON);

module.exports = reviewsRouter;
