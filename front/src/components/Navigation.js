import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Outlet} from "react-router-dom"
import axios from "axios"
const Navigation =(props)=> {
    const Logout =async()=>{
      const response = await axios.post("http://localhost:4000/user/logout")
      const data=response.data
      console.log(data)
      props.func()
    }
        return (
            <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light nav-back fixed-top">
           <div className="navbar-nav">
              <Link className="nav-item nav-link " to="/Dashboard">Add Task </Link>
              <Link className="nav-item nav-link" to="/Dashboard/View">View</Link>
              <span style={{position: 'absolute',right: 0}}>
              <button style={{border:0}} className="nav-item nav-link bg-light"onClick={Logout}>Logout </button>
              </span>
            </div>
           
        </nav >
        <div style={{margin:80}} >
         
        <Outlet/>
        </div>
        </>
          );
}
 
export default Navigation;