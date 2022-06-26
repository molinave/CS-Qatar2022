const { findById } = require('../models/User');
const User = require('../models/User');

const createUser = async (user) =>{
    const newUser = await new User(user);
    return newUser;
};

const updateUser = async(user,idUser) => {
    const resUser = await User.findById(idUser);
    const newUser = await resUser.update(user);
    return newUser;
};

const findAllUser = async(queries) =>{
    return User.findAllUser(queries);
};

const findUser = async(idUser) =>{
    const resUser = findById(idUser);
    return resUser;
};

const deleteUser = async(idUser) =>{
    const resUser = User.findByIdAndDelete(idUser);
    return resUser;
};

module.exports={
    createUser,
    updateUser,
    findAllUser,
    findUser,
    deleteUser
};