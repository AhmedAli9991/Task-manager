import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function Details() {
    const[Title,setTitle]=useState('')
    const[Desc,setDesc]=useState('')
    const{id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        getData()
      },[])
      const getData=async()=>{
        const response = await axios.get(`http://localhost:4000/Task/${id}`)
        const res = response.data
        setTitle(res.Title)
        setDesc(res.Desc)
      }
      
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(Title==''||Desc==''){
            alert('missing data')
        }
        else{
            await axios.put(`http://localhost:4000/Task/${id}`,{Title,Desc})
            setTitle('')
            setDesc('')
            navigate("/Dashboard/View", { replace: true })

        }
    }
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Edit Task</h3></div>
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
                       
                            <button type='Submit' className="btn btn-primary" >Update</button>  
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</div>
  );
}

export default Details;