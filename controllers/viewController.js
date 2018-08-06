module.exports = {

    showAllRestaurants (req,res) {
        res.render('restaurant/showAllRestaurants', {restaurants: res.locals.data});
    },

    createRestaurant (req,res) {
        res.render('restaurant/createRestaurant');
        // res.locals.data = newRestaurant;

    },

    // filterRestaurant (req,res) {
    //     res.render('restaurant/filterRestaurant');
    // }, 

    showReviewById (req,res) {
        res.render('reviews/showReviewById', {reviews: res.locals.id});
    },

    createReview (req,res) {
        res.render('reviews/createReview', {reviews: res.locals.id, restaurant_id: req.params.id});
    },

    handleDelete(req, res) {
        const id = restaurant_id;
        res.redirect('reviews/:id');
      },

    showEdit(req, res) {
        // not able to understand the id here
        res.render('reviews/updateReview', {reviews: res.locals.data[0].id});

      },

    handleUpdate(req, res) {
        const { id } = req.params;
        res.redirect(`/reviews/${id}`);
      },
    
    show404(req, res) {
        res.send(404);
    },

}