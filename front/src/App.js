import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Add from './components/Add'
import View from './components/View'
import Navigation from './components/Navigation'
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Route,
  Routes,Navigate
} from "react-router-dom"
import {useState} from 'react'
function App() {
const [login,setlogin]= useState(false)
const LoggingIn = ()=>{
  setlogin(true)
}
const LoggingOut =()=>{
  setlogin(false)
}
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Login func={LoggingIn}/>}/>
      <Route path='/Register' element={<Register/>}/>
      {login&&
      <Route path='/Dashboard' element={<Navigation func={LoggingOut}/>}>
        <Route path='/Dashboard' element={<Add/>}/>
        <Route path='/Dashboard/View' element={<View/>}/>
        <Route path='/Dashboard/:id' element={<Details/>}/>
      </Route>
      }
      <Route path="*"element={<Navigate to="/" />}/>

    </Routes>
  
  </BrowserRouter>    );
}

export default App;
