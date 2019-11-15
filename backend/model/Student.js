const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    
    _studentid:{
        type:String,
        required:true,

    },    
    _studentname:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    _studentemail:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    _studentpassword:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    date:{
        type:Date,
        default:Date.now
    },
    books:{
        type:Array
    }


});

module.exports  = mongoose.model('Student',Student);
