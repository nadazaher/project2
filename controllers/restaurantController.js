const db = require('../models/restaurant');

module.exports = {
index(req, res, next) {
    db.findAll()
      .then((restaurants) => {
        res.locals.data = restaurants;
        next();
      })
      .catch(e => next(e));
      },

getByLocation(req, res, next) {
    db.findByLocation(req.params.location)
        .then((restaurant) => {
            res.locals.location = restaurant;
            console.log(res.locals.location);

        next();
        })
        .catch((e) => {
          res.send(404);
        });
      },

getByCuisine(req, res, next) {
    console.log('cuisine')
    db.findByCuisine(req.params.cuisine)
        .then((restaurant) => {
            res.locals.cuisine = restaurant;
            console.log(res.locals.cuisine);
        next();
        })
            .catch((e) => {
              res.send(404);
            });
        },

createRestaurant(req, res, next) {
    db.create(req.body)
            .then((newRestaurant) => {
              res.locals.data = newRestaurant;
              next();
            })
            .catch ((e) => {
              next(e);
            })
          },

  }