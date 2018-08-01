const path       = require('path');
const logger     = require('morgan');
const express    = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
  });
  