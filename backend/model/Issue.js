const mongoose = require('mongoose');

const Issue = new mongoose.Schema({
    
    _bookID:{
        type:String,
        required:true,
       
    },
    _studentID:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports  = mongoose.model('Issue',Issue);