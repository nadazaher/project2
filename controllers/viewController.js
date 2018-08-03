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


    show404(req, res) {
        res.send(404);
    },

}