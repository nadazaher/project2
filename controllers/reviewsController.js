const db = require('../models/reviews');

module.exports = {
    index(req, res, next) {
        db.findAll()
          .then((reviews) => {
            res.locals.data = reviews;
            next();
          })
          .catch(e => next(e));
    },
    getById(req, res, next) {
        db.findById(req.params.id)
            .then((review) => {
                res.locals.review = review;
                console.log(res.locals.review);
                next();
            })
            .catch((e) => {
                res.sendStatus(404);
                });
    },
    getByRestaurantId(req, res, next) {
      db.findByRestaurantId(req.params.id)
          .then((restaurant) => {
              res.locals.restaurant = restaurant;
              console.log(res.locals.restaurant);
              next();
          })
          .catch((e) => {
              res.sendStatus(404);
              });
  },
    createReview(req, res, next) {
        db.create(req.body)
                .then((newReview) => {
                  res.locals.data = newReview;
                  next();
                })
                .catch ((e) => {
                  next(e);
                })
              },

    deleteReview(req, res, next) {
      console.log('nada delete');
        db.delete(req.params.id)
            .then(() => {
              next();
            })
            .catch((e) => {
              res.sendStatus(400);
            })
          },
    
          // this function takes the three parameters and declares variables needed to show the existing review
          // then calls on the update function in models and returns a promise with the modified review
          // if code runs smoothly, function will call next(), if not it will catch an error
    updateReview(req, res, next) {
        const { id } = req.params.id
        const { restaurant_id, author, content } = req.body;
        const modifiedReview = {
            id: req.params.id,
            restaurant_id,
            author,
            content
        };
        db.update(modifiedReview)
             .then((review) => {
               res.locals.data = review;
               next();
             })
             .catch(e => next(e));
          }, 


}
