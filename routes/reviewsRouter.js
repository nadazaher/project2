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
reviewsRouter.route('/:id/new').get(viewController.createReview);
reviewsRouter.route('/').post(reviewsController.createReview, viewController.handleCreate,
  (req,res) => res.redirect(`/reviews/:id`)
  );

reviewsRouter.route('/:id').get(reviewsController.getByRestaurantId, viewController.showReviewById, viewController.show404);
// this needs to show the pre-filled review form,  DOES NOT WORK because ID in updateReview is undefined?
reviewsRouter.route('/:id/edit').get(reviewsController.getById, viewController.showEdit);
// this should allow user to update existing review DOES NOT WORK
reviewsRouter.route('/:id').put(reviewsController.updateReview, viewController.handleUpdate,
  (req,res) => res.redirect(`/reviews/:id`));


module.exports = reviewsRouter;


