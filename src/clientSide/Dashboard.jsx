import RootLayout from './component/layouts/RootLayout' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Bottom from './Bottom'
import Navbar from './component/layouts/Navbar'
import Cards from './component/Cards'
function Dashboard() {
const navigate = useNavigate()

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

  return (
   <div>
            <Navbar />
            <Cards />
            <Bottom />


   </div>
  )

      }
export default Dashboard