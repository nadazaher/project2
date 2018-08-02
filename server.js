const path       = require('path');
const logger     = require('morgan');
const express    = require('express');
const bodyParser = require('body-parser');

const restaurantRouter   = require('./routes/restaurantRouter');
const reviewsRouter   = require('./routes/reviewsRouter');
const locationRouter   = require('./routes/locationRouter');
const cuisineRouter   = require('./routes/cuisineRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/restaurants/', restaurantRouter);
app.use('/restaurants/location', locationRouter);
app.use('/restaurants/cuisine', cuisineRouter);
app.use('/reviews', reviewsRouter);


app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
  });
  