import { Sequelize } from "sequelize";

const sequelize = new Sequelize('node_fulltask', 'root', '123456789', 
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    });

let connectDB = async () => {  // async --> bất đồng bộ --> giúp cho các tác vụ khác vẫn thực hiện trong khi máy chạy lấy database
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error)
    {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;