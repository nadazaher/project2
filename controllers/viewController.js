module.exports = {

    showAllRestaurants (req,res) {
        res.render('restaurant/showAllRestaurants', {restaurants: res.locals.data});
    },

    createRestaurant (req,res) {
        res.render('restaurant/createRestaurant');
        // res.locals.data = newRestaurant;

    },

    filterRestaurant (req,res) {
        res.render('restaurant/filterRestaurant');
    },

    showReviewById (req,res) {
        res.render('reviews/showReviewById', {reviews: res.locals.id});
    },

    createReview (req,res) {
        console.log('new');
        res.render('reviews/createReview');
        // res.locals.data = newReview;

    },

    handleDestroy(req, res) {
        res.redirect('/reviews');
      },

      showEdit(req, res) {
        res.render('reviews/updateReview');
      },

    handleUpdate(req, res) {
        const { id } = req.params;
        res.redirect(`/reviews/${id}`);
      },
    
    show404(req, res) {
        res.send(404);
    },

}