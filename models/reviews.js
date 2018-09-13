// execute pgp with db config, so a connection is made
const {db} = require('../config/connection');

// exporting my functions
module.exports = {

    findAll() {
        return db.many(`
        SELECT * 
        FROM reviews
        `);
    },
    findByRestaurantId(id) {
        return db.many(`
        SELECT 
        author, 
        content, 
        name,
        photo,
        restaurant_id,
        reviews.id as review_id
        FROM reviews 
        JOIN restaurant 
        ON (reviews.restaurant_id = restaurant.id)
        where restaurant.id = ${id}
        `);
    },

    findById(id){
        return db.one(`
        SELECT * FROM reviews
        WHERE id=$1`,id)
    },


    create(newReview) {
        return db.one(`
        INSERT INTO reviews
        (restaurant_id, author, content)
        VALUES
        ($1, $2, $3)
        RETURNING *
        `, [newReview.restaurant_id, newReview.author, newReview.content]);
    },

    delete(id) {
        return db.none(`
        DELETE FROM reviews
        WHERE id = $1`, id);
    },

    update(review) {
        return db.one(`
        UPDATE reviews
        SET author = $/author/, content = $/content/
        WHERE id = $/id/
        RETURNING *
        `, review);
    }
};
