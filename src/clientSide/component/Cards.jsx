import {useState} from 'react'
import avatar from  '../../image/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt ,faFolder} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const  cloth = <FontAwesomeIcon icon={faShirt} fade size="lg" />
const explore  = <FontAwesomeIcon icon={faFolder} flip size="2xl" />

const Cards = () => {
 
  return (
  <div className="w-full grid mt-10 grid-cols-1 px-10 md:flex flex-row gap-2 pb-16 text-indigo-900">
                    <Link  style={{ backgroundImage: "url('/images/banner-clock.png')" }}
                    className="transition-all duration-300 border border-indigo-200 rounded-2xl  p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                           
                            <div > 
                                  {cloth}
                            </div>
                        <div className="flex  justify-center">
                          
                            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500
                             dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                              dark:focus:ring-blue-800">My Order's</button>
                        </div>
                   
                        <p className="max-w-lg font-black">
                           
                            View Orders And Track Progress Of Orders
                        </p>
                    </Link>
                     <div  style={{backgroundRepeat: "no-repeat" ,backgroundImage: "url('/images/banner-map.png') "  }}
                    className="transition-all duration-300 border border-indigo-200 rounded-2xl  p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                           
                            <div>
                                  {explore}
                            </div>
                        <div className="flex  justify-center">
                          
                            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500
                             dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                              dark:focus:ring-blue-800">Explore</button>
                        </div>
                   
                        <p className="max-w-lg font-black">
                           
                            Explore styles and Add to cart
                        </p>
                    </div>
                     <div  style={{backgroundRepeat: "no-repeat" ,backgroundImage: "url('/images/footer-bg.png') "  }}
                    className="transition-all duration-300 border border-indigo-200 rounded-2xl  p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                           <div>
                            
                            </div>
                        <div className="flex  justify-center">
                          
                            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500
                             dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                              dark:focus:ring-blue-800">My Measurement</button>
                        </div>
                   
                        <p className="max-w-lg font-black">
                           
                            Input Measurement and learn how to measure 
                        </p>
                    </div>
                    <div  style={{ backgroundImage: "url('/images/banner-box.png')" }}
                    className="transition-all duration-300 border border-indigo-200 rounded-2xl  p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                           
                        <div className="flex  justify-center">
                          
                            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500
                             dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                              dark:focus:ring-blue-800">Packages</button>
                        </div>
                   
                        <p className="max-w-lg font-black" >
                           
                        View types of package for more explore 
                        </p>
                    </div>
                    </div>
  )
}

export default Cards