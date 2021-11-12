let express = require('express');
let routers = express.Router();
let usr_router = require('./user.root')
let auth_router = require('./auth.root')
const path = [
    {
        path: '/user',
        routs:usr_router
    },
    {
        path: '/auth',
        routs:auth_router
    }
]
path.forEach(d => {
    routers.use(d.path,d.routs);
});

module.exports = routers;