var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost/PSAS',{
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
   
});



module.exports.User = require("./user");