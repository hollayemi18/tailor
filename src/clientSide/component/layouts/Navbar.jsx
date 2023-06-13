import React from 'react'
import { Link } from 'react-router-dom'
import avatar from  '../../../image/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCartShopping} size="lg" />
const notify = <FontAwesomeIcon icon={faBell} size='lg'/>
const Navbar = () => {
  const user = "Olasunkanmi"
  return (
       < div className="flex justify-between lg:justify-evenly py-0 xl:py-0">
           <Link to="/" className="ml-4 mt-3" >
               <h2 className=" font-serif font-semibold text-indigo-600 md:text-4xl text-2xl">Ease </h2>       
             </Link>
             <div className='font-extrabold text-lg mt-14'>
               <em>Welcome  
                <span className='text-indigo-700 font-serif ml-2'>{user}</span></em>
             </div>
             <div className='mt-6'>
              {element}
              
             </div>
              <div className='mt-6'>
              {notify}
              
             </div>
                <div>
                  
                   <img className='w-10 rounded-full ring mr-8 mt-4 ring-offset-base-100 ring-offset-2' src={avatar} />
                </div>
        </div>
  )
}

export default Navbar