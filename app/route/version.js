module.exports = function(app){
    const version = require('../controller/version');
    app.get('/object/:key',version.getVersion)
    app.post('/createversion',version.createVersion)
}