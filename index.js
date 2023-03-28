const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

// Initializations
require('./src/database')

// Settings
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use(require('./routes/clients'));

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})