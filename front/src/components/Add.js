import React, { useState } from 'react';
import axios from 'axios';

function Add() {
    const[Title,setTitle]=useState('')
    const[Desc,setDesc]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(Title==''||Desc==''){
            alert('missing data')
        }
        else{
            await axios.post("http://localhost:4000/Task/add",{Title,Desc})
            setTitle('')
            setDesc('')
        }
    }
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Add Task</h3></div>
                <div className="card-body">
                <form onSubmit={handleSubmit}> 
                        <div className="form-floating mb-3">
                            <input className="form-control" placeholder="Title" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                            <label className="form-label">Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control bg-textarea" value={Desc}  rows="3" placeholder="Description" onChange={(e)=>setDesc(e.target.value)}/>
                            <label className="form-label">Description</label>
                        </div>
                       
                            <button type='Submit' className="btn btn-primary" >Add Task</button>  
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</div>
  );
}

export default Add;