let express =  require('express');
let morgan = require('morgan');
let status = require('http-status');
let logger = require('./config/logger')
let { ApiError } = require ('./payload/apiError');
require('dotenv').config({ path: '../../.env' })
let all = require('./routes');
let helmet = require('helmet');
let cors = require('cors');
let app = express();
let port = 3001;
let bodyparser = require('body-parser');
app.use(express.json());
app.use(morgan('tiny'))
app.use('/', all);
app.use(cors());
app.use(helmet());
app.use((req,res,next) =>{

    let state = status.NOT_FOUND;
    let message = "Not Found"
    let error = 'Not Found'
    logger.info("unknown api");
    res.status(404).send( new ApiError(state, message, error ));

});
app.use(function (err, req, res, next) {
    res.status(401).send(err)
})
app.listen(port , () => {
    console.log('is working'+port);
});