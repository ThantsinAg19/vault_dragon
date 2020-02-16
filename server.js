const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

const db = require('./app/config/db');

db.sequelize.sync({
    force:false
}).then(()=>{
    console.log('Successfully connected to database...')
}).catch(error=>{
    console.log(error)
})

require('./app/route/version')(app)

app.listen(8443,function(){
    console.log('Sever is starting at ...')
})