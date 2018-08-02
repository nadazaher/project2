const db = require('../models/restaurant');

module.exports = {
index(req, res, next) {
  const {location,cuisine} = req.query
    db.findAll()
      .then((restaurants) => {
        return restaurants.filter((restaurant) => {
          return location?restaurant.location === location: true &&
           cuisine?restaurant.cuisine === cuisine: true
        })
      })
      .then((filteredRestaurants) => {
        res.locals.data = filteredRestaurants;
        next();
      })
      .catch(e => next(e));
      },

createRestaurant(req, res, next) {
  db.create(req.body)
          .then((newRestaurant) => {
            res.locals.data = newRestaurant;
            next();
          })
          .catch(e => next(e));
      },
}