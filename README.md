![alt text](https://github.com/nadazaher/blob/master/project2/Screen%Shot%2018-08-08%at%12.07.24%AM.png)

# Restaurant Recommender & Reviewer

## What is this?

This is a CRUD app that allows user to CREATE, READ, UPDATE, and DELETE restaurant recommendation/review. When a "user" opens the website he/she first see a list of restaurants. User can add a restaurant recommendation and then can filter by location or cuisine to get a shortened list of recommended restaurants. Once he/she see a returned list of recommended restaurants a user can click to see a detailed version of a restaurant recommendation, he/she will see the reviews of that restaurant. That is where the user can either add, edit, or delete a review. If a user adds a new review, the page will be refreshed showing the addition of his/her review.

## Motivation

I am choosing to make this because I think people in NYC are always looking for restaurant recommendations. For now, it suggests based on my favorite restaurants. I can also eventually link this to my portfolio!

## Initial thoughts on app structure

This app requires two tables - a restaurant table and a reviews table which have a one-to-many relationship. The reviews table has a restaurant_id since reviews are linked to a specific restaurant and thats why in my model I create a join where it joins the restaurant.id to reviews.restaurant_id. Once I had the tables schema set, I seeded the data into it. Then I created relevant models for each table to CRUD accordinly. Each function in the model should then be called with a promise in the relevant controller. In order to display the HTML I had to use EJX in views and a view controller to render dynamic the HTML on the webpage. I ended with the restaurant and reviews routes that help us link our controllers in the path's URL. All of this is running on a locally hosted server created in server.js with dependencies - morgan, express, body-parser, ejs, method-override, nodemon, and pg-promise. 

## Phases of Completion/Features

As a user, I want to be able to see a list of restaurants and recommendations to help me decide where to eat. 
1) User needs to see a collection of top restaurants in NYC.
2) User needs to filter by location or cuisine to find restaurants.
3) User needs to add a review to an existing restaurant.
4) User needs to delete a review to an existing restaurant.
5) User needs to edit a review to an existing restaurant.
6) User needs to add a new restaurant recommendation.


## Code Example 

```javascript
          // this function takes the three parameters and declares variables needed to show the existing review
          // then calls on the update function in models and returns a promise with the modified review
          // if code runs smoothly, function will call next(), if not it will catch an error
    updateReview(req, res, next) {
        const { id } = req.params.id
        const { restaurant_id, author, content } = req.body;
        const modifiedReview = {
            id: req.params.id,
            restaurant_id,
            author,
            content
        };
        db.update(modifiedReview)
             .then((review) => {
               res.locals.data = review;
               next();
             })
             .catch(e => next(e));
          }, 
```
## How to Use?
Feel free to fork and clone my repo so you can access and play around with the code. If you want to run the app on your localhost don't forget to intsall psql first, createdb, run the schema and seed commands, then npm install, and npm run dev to get the server running. 

Here is the screen recording explaining the app and the code - https://youtu.be/YUuTur8JFkE

## Ways to Improve 
The main things that could make my app and code better are:
- Getting filter to work properly if user picks more than one cuisine or more than one location
- CSS/Styling
- Build a reviews router on the restaurants one rather than have two separte ones
- Comment more of the code even though its fairly structured because of the MVC model
- Add a way for user to redirect to homepage from any page
- Create more detailed restaurant pages with more than just reviews

## Future Ideas
o	Using YELP API to trigger list of restaurants
o	Adding user authentication so users have to log in before posting reviews
o	Allowing users to edit, update, and delete only their own reviews
o	Adding an admin to approve any submissions or edits before being posted



