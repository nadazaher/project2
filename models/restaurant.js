// execute pgp with db config, so a connection is made
const {db} = require('../config/connection');

// exporting my functions

module.exports = {

    findAll() {
        return db.many(`
        SELECT * 
        FROM restaurant
        `);
    },
    findByLocation(location) {
        return db.query(`
        SELECT *
        FROM restaurant
        where location = $1
        `, location);
    },
    findByCuisine(cuisine) {
        return db.query(`
        SELECT *
        FROM restaurant
        where cuisine = $1
        `, cuisine);
    },

    create(newRestaurant) {
        return db.one(`
        INSERT INTO restaurant
        (name, location, cuisine)
        VALUES
        ($1, $2, $3)
        RETURNING *
        `, [newRestaurant.name, newRestaurant.location, newRestaurant.cuisine]);
    },

};
