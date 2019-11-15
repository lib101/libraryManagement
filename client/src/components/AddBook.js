import React from 'react'
import axios from 'axios'



class Addbook extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            _bookid: '',
            _bookname: '',
            _bookauthor: '',
            _bookgenre: '',
        }

        this.myChangeHandler = this.myChangeHandler.bind(this)
    }



    myChangeHandler = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

        console.log(this.state)
    }


    submitHandler = (event) =>{
        
        event.preventDefault();

        axios.post('/addbook',{_bookid: this.state._bookid,
                               _bookname: this.state._bookname,
                               _bookauthor: this.state._bookauthor,
                               _bookgenre: this.state._bookauthor})
             .then(res=>{console.log(res)})
             .catch(err=>{console.log(err)});

        




    }



    render() {



        return (

            <div>
                <h3>Addbook</h3>

                <br />

                <form method='post' onSubmit={this}>

                    <input type='text' name='_bookid' placeholder='Book ID' value={this.state._bookid} onChange={this.myChangeHandler}></input>
                    <input type='text' name='_bookname' placeholder='Book Name' value={this.state._bookname} onChange={this.myChangeHandler}></input>
                    <input type='text' name='_bookauthor' placeholder='Book Author' value={this.state._bookauthor} onChange={this.myChangeHandler} ></input>
                    <input type='text' name='_bookgenre' placeholder='Book Genre' value={this.state._bookgenre} onChange={this.myChangeHandler} ></input>
                    <input type='submit'></input>

                </form>

            </div>
        )



    }
}
export default Addbook