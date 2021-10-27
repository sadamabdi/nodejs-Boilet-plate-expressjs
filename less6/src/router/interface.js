let express = require('express');
let routers = express.Router();
let user = require('./user');
let auth = require('./auth');
let bash = require('./bashal');
let paths = [
    {
        path: '/auth',
        routs: auth
    },
    {
        path: '/user',
        routs: user
    },
    {
        path: '/bash',
        routs: bash
    }
];
// routers.use('/user',user);
// routers.use('/auth',auth);
paths.forEach(d => {
routers.use(d.path,d.routs);
});
// normal loop
// for (let i = 0; i < paths.length; i++) {
// routers.use(paths[i].path,paths[i].routs)
// }

module.exports = routers;