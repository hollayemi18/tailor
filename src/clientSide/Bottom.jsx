import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div>
        
<div className="fixed bg-neutral-200  shadow-lg z-50 w-full h-16 max-w-lg -translate-x-1/2 
 border-gray-200 rounded-full bottom-2 left-1/2 ">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
       <Link to="/dashboard/client" className="no-underline text-black">
        <div className=''>
         <button data-tooltip-target="tooltip-home" type="button" className="inline-flex 
         
         flex-col items-center justify-center px-5 rounded-l-full hover:text-black hover:bg-black dark:hover:bg-gray-300 rounded-md">
           <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="25"
      width="25"

    >
      <path d="M8 2c3.9 0 7 3.1 7 7 0 2.4-1.2 4.5-3 5.7V17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-2.3C2.2 13.5 1 11.4 1 9c0-3.9 3.1-7 7-7M5 21v-1h6v1c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1M8 4C5.2 4 3 6.2 3 9c0 2.1 1.2 3.8 3 4.6V16h4v-2.4c1.8-.8 3-2.5 3-4.6 0-2.8-2.2-5-5-5m12.5 10.5V16H19v-1.5h1.5m-2-5H17V9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 1.9-1.3 2.4l-.3.2c-.6.4-.9 1-.9 1.7v.2H19v-.2c0-1.2.6-2.3 1.6-2.9l.3-.2c.4-.3.6-.7.6-1.2 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v.5z" />
    </svg>
            <span className="btm-nav-label font-serif">Help</span>
        </button>
       </div>
       </Link>

       <Link to='/dashboard/wallet' className="no-underline text-black ">
        <div className='btn-nav'>
            <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex 
            flex-col items-center justify-center px-5 hover:text-black hover:bg-gray-50 dark:hover:bg-gray-300 rounded-3xl">
            <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
            </svg>
            <span className="btm-nav-label">Wallet</span>
        </button>
        </div>
       </Link>
     <Link to="/dashboard/order" className="no-underline text-black ">
        <div className="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex
             items-center justify-center w-10 h-10 font-medium bg-blue-600 hover:text-black rounded-full hover:bg-blue-900
              group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
                </svg>
            </button>
        </div>
     </Link>
         <Link to="/dashboard/setting" className="no-underline text-black "> 
         <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col 
         items-center justify-center px-5 hover:bg-gray-50 hover:text-gray-950 dark:hover:bg-gray-300 rounded-3xl">
            <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
            <span className="btn-nav-label">Settings</span>
        </button>
        </Link>
       
     <Link to="/dashboard/profile" className="no-underline text-black ">
           <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col 
           items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-300 hover:text-black rounded-2xl">
            <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
            </svg>
            <span className="btm-nav-label font">Profile</span>
        </button>
     </Link>
    
    </div>
</div>

    </div>
  )
}

export default Bottom