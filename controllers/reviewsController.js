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
        console.log('hello');
        db.findById(req.params.id)
            .then((restaurant) => {
                res.locals.id = restaurant;
                console.log(res.locals.id);
                next();
            })
            .catch((e) => {
                res.send(404);
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
        db.delete(req.params.id)
            .then(() => {
              res.sendStatus(200);
            })
            .catch((e) => {
              res.sendStatus(400);
            })
          },
    
    updateReview(req, res, next) {
        console.log('hello');
        //const { id } = req.params.id
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
