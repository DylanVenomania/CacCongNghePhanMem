import db from "../models/index.js";
import CRUDService from "../services/CRUDService.js"

//Hàm getHomePage
let getHomePage= async (req,res) => {
    try{
        let data = await db.User.findAll();
        return res.render("homePage.ejs",{
            data: JSON.stringify(data)  // trả về dữ liệu data về view
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).send('Internal Server Error');
    }
    
}

//Hàm getAbout
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

//hàm CRUD
let getCRUD= (req,res)=>{
    try{
        return res.render("crud.ejs");
    }catch(err){
        return res.status(500).send('Internal Server Error');
    }
}

//hàm findAll CRUD
let getFindAllCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data);
    console.log('..........................')
    return res.render('users/findAllUser.ejs', {
        datalist: data
    }); //gọi view và truyền dữ liệu view
}

// hàm post CRUD
let postCRUD= async (req,res)=>{
    try{
        let message = await CRUDService.createNewUser(req.body);
        console.log(message);
        return res.send("post");
    }
    catch(err){
        return res.status(500).send("Internal Server Error");
    }
}


let getEditCRUD= async (req,res)=>{
    let userId= req.query.id;
    if(userId){
        let userData= await CRUDService.getUserInfoById(userId);
        console.log(userData);
        return res.render("updateUser.ejs",{
            user: userData
        });
    }
    else{
        return res.send("Not found a User");
    }
    
}

let putCRUD= async (req,res)=>{
    let data= req.body;
    let userList = await CRUDService.updateUser(data); //update rồi hiển thị lại danh sách user
    return res.render("users/findAllUser.ejs",{
        datalist: userList
    });
    return res.send('Update thành công!');
}

let deleteCRUD = async (req,res)=>{
    let id= req.query.id;
    if(id)
    {
        await CRUDService.deleteUserById(id);
        return res.send('Deleted!')
    }
    else{
        return res.send('Not find user')
    }
}

export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getFindAllCrud: getFindAllCrud,
    getEditCRUD : getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}