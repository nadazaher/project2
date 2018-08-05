const path       = require('path');
const logger     = require('morgan');
const express    = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const restaurantRouter   = require('./routes/restaurantRouter');
const reviewsRouter   = require('./routes/reviewsRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use('/restaurants', restaurantRouter);
app.use('/reviews', reviewsRouter);

//Set up views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
  });
  