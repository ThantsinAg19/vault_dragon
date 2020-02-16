const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATA_BASE,process.env.USER_NAME,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect : process.env.DIALECT,
    pool : {
        max : 5,
        min:0 ,
        acquire:30000,
        idle:10000,
    }
})

const db = {} 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.version = require('../model/version')(sequelize,Sequelize)

module.exports = db;