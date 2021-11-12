const converObject = (data) =>{
    if(!data.metaData || !data.rows){
        return data;
    }
var arr = [];
let col = data.metaData;
let rows =  data.rows;
   rows.forEach((row , i) =>{
       let obj = {};
       col.map((c, j) =>{
           obj[c.name.toLowerCase()] = row[j];
       });
       arr.push(obj)
   });
   return arr;
}
const handleAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((err) => next(err));
}
module.exports = {
    converObject,
    handleAsync
}