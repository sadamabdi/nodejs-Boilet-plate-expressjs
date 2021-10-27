let express =  require('express');
let morgan = require('morgan');
let body = require('body-parser');
let winst = require('./winston/logger')
require('dotenv').config({ path: '../../.env' })
let interface = require('./router/interface');
let app = express();
let port = process.env.PORT;
app.use(body.json());
// identify the URL, declare a status, and the request’s response time in milliseconds.

console.log(process.env.PORT)
// morgan(':method :url :status :res[content-length] - :response-time ms');
morgan('tiny');
//middle ware
winst.error('hello lesson6');
app.use(process.env.path, interface);
app.listen(port , () => {
    console.log('is working'+port);
});