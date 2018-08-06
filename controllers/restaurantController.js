const db = require('../models/restaurant');

module.exports = {
  index(req, res, next) {
    const {location,cuisine} = req.query
    console.log("nada", location, cuisine);
      db.findAll()
        .then((restaurants) => {
          return restaurants.filter((restaurant) => {
            return location?restaurant.location === location: true &&
             cuisine?restaurant.cuisine === cuisine: true
          })
        })
        .then((filteredRestaurants) => {
          res.locals.data = filteredRestaurants;
          console.log("john", filteredRestaurants);
          //Check location and cuisine for filtered results - one location / one cuisine option
          if(req.query.location || req.query.cuisine){
            for(var x = 0; x < filteredRestaurants.length; x++){
              if(filteredRestaurants[x].location != location){
                filteredRestaurants.splice(x, 0)
              }
              else if(filteredRestaurants[x].cuisine != cuisine){
                filteredRestaurants.splice(x, 0)
              } else {
              return(filteredRestaurants);
            }}}
          next();
        })
        .catch(e => next(e));
        },
  
// filterRestaurant(req,res,next) {
 
// }

createRestaurant(req, res, next) {
  db.create(req.body)
          .then((newRestaurant) => {
            res.locals.data = newRestaurant;
            next();
          })
          .catch(e => next(e));
      },
}