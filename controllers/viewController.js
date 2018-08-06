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
        res.render('reviews/showReviewById', {reviews: res.locals.restaurant});
    },

    createReview (req,res) {
        res.render('reviews/createReview', {reviews: res.locals.id, restaurant_id: req.params.id});
    },

    handleDelete(req, res) {
        console.log('deleteeeee');
        const id = restaurant_id;
        res.redirect('reviews/:id');
      },

    showEdit(req, res) {
        // not able to understand the id here
        res.render('reviews/updateReview');

      },

    handleUpdate(req, res) {
        const { id } = req.params;
        console.log(res.locals);
        res.redirect(`/reviews/${res.locals.data.restaurant_id}`);
      },
    
    show404(req, res) {
        res.send(404);
    },

}