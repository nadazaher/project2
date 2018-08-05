const express = require('express');
const reviewsController = require('../controllers/reviewsController');
const bodyparser = require('body-parser');
const reviewsRouter = express.Router();
const viewController = require('../controllers/viewController');

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
reviewsRouter.route('/:id/edit').get(reviewsController.getById, viewController.showReviewById, viewController.show404);
reviewsRouter.route('/:id').delete(reviewsController.deleteReview, viewController.handleDestroy);
reviewsRouter.route('/:id').put(reviewsController.updateReview, viewController.handleUpdate,
  (req,res) => res.redirect(`/reviews`));



reviewsRouter.route('/new').get(viewController.createReview, viewController.show404);
//not hitting this /new route

reviewsRouter.route('/').post(reviewsController.createReview, 
(req,res) => res.redirect(`/reviews`)
);


module.exports = reviewsRouter;
