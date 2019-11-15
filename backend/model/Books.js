const mongoose = require('mongoose');

const Books = new mongoose.Schema({
    _bookid:{
        type:String,
        required:true,
    },
    _bookname:{
        type:String,
        required:true,
    },
    _bookauthor:{
        type:String,
        required:true,
    },
    _bookgenre:{
        type:String
    },
    _bookdate:{
        type:Date
    }
});


module.exports  = mongoose.model('Books',Books);