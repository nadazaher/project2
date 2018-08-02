const db = require('../models/restaurant');

module.exports = {
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
        }
    }