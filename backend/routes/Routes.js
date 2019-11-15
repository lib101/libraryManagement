const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const Book = require('../model/Books');
const Student = require('../model/Student');
const Issue = require('../model/Issue');
const bcrypt = require('bcryptjs')




router.post('/login', async (req,resp)=>{

    console.log('request',req.body)
    

    const user  = await User.findOne({email: req.body.email});
    
    console.log('user', user);

    if(!user) return res.status(400).send('User does not exist');  
  
    bcrypt.compare(req.body.password, user.password, function(err, res) {
        if (err){
          
          console.log(err);
        }
        if (res)
        { 
            const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
            resp.header('auth-token',token)    
           
            try{
                const savedUser = user.save();

                console.log("passwords match");
                
                 return resp.send({logged: true,
                           _id: savedUser._id
                });

                
                
               
            }
            catch(err)
            {
                console.log("error",err)
            }
        
            
        } else {
            console.log("passwords do not match");
         
        }
      });   
    
});





router.post('/addbook', async (req,resp)=>{

    console.log('request',req.body)    

    const book  = await Book.findOne({_bookid: req.body._bookid});
    
    if(book) return resp.status(400).send("Book with the ID already exists");
    
    const newBook = new Book({
        _bookid: req.body._bookid,
        _bookname: req.body._bookname,
        _bookauthor: req.body._bookauthor,
        _bookgenre: req.body._bookgenre
    });


    try{
        const savedBook =  newBook.save();
        resp.send(savedBook);
        console.log(savedBook);
    }
    catch(err)
    {
        resp.status(400).send(err);
    }   
    
});


router.post('/issue',async (req,resp)=>{

    console.log(req.body)

    const student  = await Student.findOne({_studentid: req.body._studentid}).then(

    );    
    console.log('student', student._studentid);
    if(!student) return resp.status(400).send('Student does not exist');
    

    const book  = await Book.findOne({_bookid: req.body._bookid});    
    console.log('book', book._bookid);
    if(!book) return resp.status(400).send('Book does not exist');

    const issue = new Issue({
        _bookid: book._bookid,
        _studentid: student._studentid,
        date: Date.now()
    });

    console.log("issue",issue);


    try{
        const saveIssue =  issue.save();
        resp.send(saveIssue);
        console.log(saveIssue);
    }
    catch(err)
    {
        resp.status(400).send(err);
    }   





})


router.post('/addStudent',async (req,resp)=>{
    console.log(req.body)

    const student  = await Student.findOne({_studentid: req.body._studentid});
    
    console.log('student', student);

    if(student) return resp.status(400).send('Student already exists');  
  
    
     
    const newStudent = new Student({
        _studentid: req.body._studentid,
        _studentname: req.body._studentname,
        _studentemail: req.body._studentemail,
        _studentpassword: req.body._studentpassword,
        date: Date.now()
    });


    try{
        const savedStudent=  newStudent.save();
        resp.send(savedStudent);
        console.log(savedStudent);
    }
    catch(err)
    {
        resp.status(400).send(err);
    }          
           


} )



module.exports=router;
