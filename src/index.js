let express =  require('express');
let morgan = require('morgan');
let status = require('http-status');
let logger = require('./config/logger')
let { ApiError } = require ('./payload/apiError');
require('dotenv').config()
let all = require('./routes');
let helmet = require('helmet');
let cors = require('cors');
const bodyParser = require('body-parser');
const i18n = require('i18n')
const cookieParser = require("cookie-parser");
let app = express();
let port = process.env.PORT;
app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use('/', all);
app.use(cors());
app.use(helmet());
/**
 * Locale Configuration
 */

// i18n.configure({
//     // setup some locales - other locales default to en silently
//     locales: ['en','so'],

//     // you may alter a site wide default locales
//     defaultLocale: 'en',

//     // sets a custom cookie name to parse locales settings from
//     cookie: 'currentLocale',

//     // where to store json files - defaults to './locales'
//     directory: __dirname + '/locales'
// });
// app.use(cookieParser());
// // i18n init parses req for language headers, cookies, etc.
// app.use(i18n.init)
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