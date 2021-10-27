const userData = [
    {
        name: "ahmed mohamed adan",
        location: "somalia",
        email: "cali@gmail.com",
        age:80,
        password: "123"
    },
    {
        name: "asha ali adan",
        location: "somalia",
        email: "asha@gmail.com",
        age:90,
        password: "1234"
    }
]

const createUser = (data) => {
    userData.push(data);
    return true;
}
const getAll = () => {
    return userData;
}
const getUserByEmailAndPassword = (email,password) => {
    return userData.filter(d=> d.email == email && d.password == password);
}
const getUser = (email) => {
    return userData.filter(d=> d.email == email);
}
const updateUser = (data) => {
    newjson = userData.filter(d=> d.email === data.email);
    newjson.map(function (value,index) {
        newjson[index].name = data.name;
        newjson[index].location = data.location;
        newjson[index].age = data.age;
    });
    return true;
}
const isEmailExist = (email) => {
    return userData.filter(d=> d.email == email).length;
}
const deleteUser = (email) => {
    newjson = userData.filter(d=> d.email == email);
    newjson.map(function (value,index) {
       userData.splice(index,1);
    });
    return true;
}
module.exports = {
    createUser,
    getAll,
    getUser,
    isEmailExist,
    updateUser,
    deleteUser,
    getUserByEmailAndPassword

}