const db = require('../models/restaurant');

module.exports = {
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
     }    