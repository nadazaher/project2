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

        //     (req,res) => res.redirect(`/reviews/${req.params.restaurant.id}`)


    handleDelete(req, res) {
        console.log('deleteeeee');
        console.log(req.params.restaurant_id);
        res.redirect(`/reviews/${req.params.restaurant_id}`);
      },

    showEdit(req, res) {
        res.render('reviews/updateReview');

      },

    handleUpdate(req, res) {
        const { id } = req.params;
        res.redirect(`/reviews/${res.locals.data.restaurant_id}`);
      },

    handleCreate(req,res) {
        const { id } = req.params;
        res.redirect(`/reviews/${res.locals.data.restaurant_id}`);
    },
    
    show404(req, res) {
        res.send(404);
    },

}