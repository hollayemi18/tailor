import React, { useState } from 'react'
import Bottom from './Bottom'
import Footer from '../componet/Footer'
//import newRequest from '../utilies/newRequest'
import { useNavigate } from 'react-router-dom'
import ClientNavbar from './componets/ClientNavbar'
import axios from 'axios'
function Dashboard() {
const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  const logout  = async(e)=>{
    try {
    const out  =await axios.get('http://localhost:8080/logout')
    if (out){
      navigate('/login')
      console.log("successful logout!")
    }
    } catch (error) {
      return console.log("not successful")
    }
  }
  const auth =async ()=>{
    try {
    const res = await axios.post("http://localhost:8080/login", {
    email,
    password
  },{withCredentials: true})
  if(res){
    navigate('/dashboard')
  }
    } catch (error) {
      navigate('/')
    }
  }
  return (
   <div>
  
     <div>
       <ClientNavbar />
           <button onClick={logout} className="bg-black ml-4
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-8">  
                Logout 
              </ button>
     </div>
  
    <Bottom />

   </div>
  )

      }
export default Dashboard