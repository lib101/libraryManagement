import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const Home = () => {

   return (

        <div>
            <nav class="navbar navbar-expand-sm bg-light">

                <ul class="navbar-nav">

                    <h4>Welcome!</h4>

                    <div className="nav-list">

                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 1</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 3</a>
                        </li>

                    </div> 
                </ul>

            </nav>

            <div className="container">
                <h4>Dashboard</h4>
                <p text-align="left">
                <Link to ={`/addbook`}>
                   <input type="button" value="Addbooks"></input> 
                 </Link>   
                   <input type="button" value="Removebooks" />
                </p>
                <p text-align="right">
                    <input type="button" value="Issuebooks" />
                    <input type="button" value="Renewelbook" />
                </p>

               

            </div>
        </div>
    )
}
export default Home