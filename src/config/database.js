let oracledb = require('oracledb');
let util = require('../utils/util');
const host = '15.15.0.59:1521';
const database = 'students';
const username = 'sadam';
const password = 'sadam';
let connection;
// connection database

async function  connectiondb() {
    try{
        oracledb.initOracleClient({libDir: 'C:\\instantclient_21_3'})
          connection = await oracledb.getConnection({
            user: username,
            password: password,
            connectionString: host + '/' + database
        });

        return await connection;
    }catch (err) {
        console.log(err)
    }

}
// retrieve data from database
async function  executeQuery(query) {
    try{
        if (!connection){
            connection = await connectiondb();
        }
        let result =  await connection.execute(query);
        connection.commit();
        return await util.converObject(result);
    }catch (err) {
        console.log(err)
    }

}



module.exports = {
    executeQuery,
}
