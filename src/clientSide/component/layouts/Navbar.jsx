import { useState,useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from  '../../../image/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBell,faHand } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const element = <FontAwesomeIcon icon={faCartShopping} size="lg" />
const notify = <FontAwesomeIcon icon={faBell} size="lg" />
const baby = <FontAwesomeIcon icon={faHand} shake size="lg" />

const Navbar = () => {
  const [username, setUsername] = useState('You Are Loved');

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
       < div className="flex justify-between lg:justify-evenly py-0 xl:py-0 border-b-2 shadow-lg" >
           <Link to="/" className="ml-4 mt-3" >
               <i className=" font-serif font-semibold text-indigo-600 md:text-4xl text-2xl shadow-lg" >Ease </i>       
             </Link>
             <div className='font-thin text-lg mt-14 flex flex-row'>
               <em>Welcome  
                <span className='text-indigo-700 font-serif ml-2'>{username}</span></em>
                    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="25"
      width="35"
      
    >
      <path d="M7.03 4.95L3.5 8.5c-3.33 3.31-3.33 8.69 0 12s8.69 3.33 12 0l6-6c1-.97 1-2.56 0-3.54-.1-.12-.23-.23-.37-.32l.37-.39c1-.97 1-2.56 0-3.54-.14-.16-.33-.3-.5-.41.38-.92.21-2.02-.54-2.77-.87-.87-2.22-.96-3.2-.28a2.517 2.517 0 00-3.88-.42l-2.51 2.51c-.09-.14-.2-.27-.32-.39a2.53 2.53 0 00-3.52 0m1.41 1.42c.2-.2.51-.2.71 0s.2.51 0 .71l-3.18 3.18a3 3 0 010 4.24l1.41 1.41a5.004 5.004 0 001.12-5.36l6.3-6.3c.2-.2.51-.2.7 0s.21.51 0 .71l-4.59 4.6 1.41 1.41 6.01-6.01c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6.01 6.01 1.41 1.41 4.95-4.95c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-5.66 5.65 1.41 1.42 3.54-3.54c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19l3.53-3.54M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5H23M1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5H1z" />
    </svg>

             </div>
             <div className='mt-6 '>
              <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="25"
      width="25"
  
    >
      <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
    </svg>
             </div>
              <div className='mt-6'>
              
                  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="25"
      width="25"
    
    >
      <path d="M15 19a3 3 0 01-6 0H4a1 1 0 010-2h1v-6a7 7 0 014.02-6.34 3 3 0 015.96 0A7 7 0 0119 11v6h1a1 1 0 010 2h-5zm-4 0a1 1 0 002 0h-2zm0-12.9A5 5 0 007 11v6h10v-6a5 5 0 00-4-4.9V5a1 1 0 00-2 0v1.1z" />
    </svg>

             </div>
                <div>
                  
                   <img className='w-10 rounded-full ring mr-8 mt-4 ring-offset-base-100 ring-offset-2' src={avatar} />
                </div>
        </div>
  )
}

export default Navbar