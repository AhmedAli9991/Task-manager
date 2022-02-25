import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function View() {
const[Tasks,setTasks]=useState([])
const navigate=useNavigate()
useEffect(()=>{
  getData()
},[])
const getData=async()=>{
  const response = await axios.get("http://localhost:4000/Task/view")
  setTasks(response.data)

}
const Delete=async(id)=>{
  await axios.delete(`http://localhost:4000/Task/${id}`)
  getData()
}
  return(
    <table class="table" id="list">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

        {Tasks.map((task) => {
              return (
                <tr scope="row" key={task._id}>
                  <td>{task.Title}</td>
                  <td>{task.Desc}</td>
                  <td>
                  <button className="btn btn-primary" onClick={()=>{navigate(`/Dashboard/${task._id}`, { replace: true })}}>Update</button>  
                  </td>
                  <td>
                  <button className="btn btn-primary" onClick={()=>Delete(task._id)} >Delete</button>  
                  </td>
                </tr>
              );
            })}      
          </tbody>
      </table>
    )

}

