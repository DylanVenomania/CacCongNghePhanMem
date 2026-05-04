import bcrypt from 'bcryptjs'; //import thư viện bcrupt js
import db from '../models/index.js'; //import database

import {where} from 'sequelize';

const salt = bcrypt.genSaltSync(10); //thuật toán hashpassword
let createNewUser = async (data) => { //hàm tạo user mới với tham số data
    return new Promise( async (resolve, reject ) => { //dùng promise để đảm bảo luôn trả kết quả, trong xử lý bất đồng bộ 
        try{
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create(
                {
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender ===1 ? true: false,
                    roleId: data.roleId
                })
                resolve('Ok create a new user successfull');
            }
            catch(e){
                reject(e);
        }
    });

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve,reject) => {//dùng promise đảm bảo luôn trả kết quả, trong xử lý bất đồng bộ
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e)
        {
            reject(e);
        }

    });
}

//Lất tất cả - findAll CRUD
let getAllUser= () => {
    return new Promise( async (resolve,reject) => {
        try {
            let users= await db.User.findAll({
                raw: true, //hiện dữ liệu gốc
            });
            resolve(users); //hàm trả về kết quả
        }catch(e)
        {
            reject(e);
        }
    });
}

//lấy findOne
let getUserInfoById = (userId) => {
    return new Promise(async (resolve,reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userId},
                raw: true
            });
            if(user)
                resolve(user);
            else
                resolve([]);
        }
        catch(e)
        {
            reject(e);
        }
    })
}


let updateUser = (data) =>{
    return new Promise(async (resolve,reject)=>{ //dùng promise đảm bảo luôn trả kết quả, trong xử lý bất đồng bộ
        try{
            let user= await db.User.findOne({
                where: {id: data.id} //query điều kiện cho tham số
            });
            if(user){
                user.firstName= data.firstName;
                user.lastName= data.lastName;
                user.address= data.address;
                await user.save();

                //lấy danh sách user
                let allusers = await db.User.findAll();
                resolve(allusers);
            }else{
                resolve(); //hàm trả về kết quả rỗng
            }
        }catch(e){
            reject(e);
        }
    });
}


let deleteUserById = (userId) =>{
    return new Promise(async (resolve, reject)=>{ //dùng promise đảm bảo luôn trả kết quả, trong xử lý bất đồng bộ
        try{
            let user = await db.User.findOne(
                {
                    where : {id : userId}
                }
            )
            if (user)
            {
                user.destroy();
            }
            resolve(); //là return
        }catch(e){
            reject(e);
        }
    });
}

module.exports = { //xuất hàm ra bên ngoài
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUser: updateUser,
    deleteUserById: deleteUserById,
}
