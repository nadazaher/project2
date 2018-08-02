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
