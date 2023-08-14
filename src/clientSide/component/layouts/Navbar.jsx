import { useState,useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from  '../../../image/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faBell } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const notify = <FontAwesomeIcon icon={faCartPlus} size='xl' />
const  bell = <FontAwesomeIcon icon={faBell} size='xl'/>
const Navbar = () => {
  const [username, setUsername] = useState('Hisiayah');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token')
         const response = await axios.get("http://localhost:8080/user");
      const userData = await response.json();
      setUsername(userData.username); // Assuming the user object has a 'username' property
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  return (
       < div className="flex flex-row pt-0 mx-1 justify-between lg:justify-evenly py-2 xl:py-0 border-b-1 " >
              <div className='ml-5 flex flex-row'> 
                  <img className='w-12 rounded-full  mt-6 ring-offset-base-100 ' src={avatar} />
                    <div className='mt-6 ml-2 flex flex-col'>
               <em className='text-1xl'>Hi
                <span className='text-teal-500 font-serif ml-2'>{username}!</span></em>
                <i className='text-teal-700 font-serif'>welcome
                <span className='text-teal-700 font-serif ml-1'>back</span></i>
             </div>
               </div> 
              <div className='mt-8 mr-5 grid grid-cols-2 gap-6 text-teal-800'>
                {notify}
                {bell}
             </div>               
        </div>
  )
}

export default Navbar