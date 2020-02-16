module.exports = (sequelize , Sequelize) =>{
    return history = sequelize.define('history',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        key:{
            type:Sequelize.STRING,
            allowNull:false
        },
        value:{
            type:Sequelize.STRING,
            allowNull:false
        },
        timestamp:{
            type:Sequelize.BIGINT,
            defaultValue : new Date().getTime()
        }
    },{
        timestamps:true,
        freezeTableName:true,
        tableName : 'version'
    })
 }