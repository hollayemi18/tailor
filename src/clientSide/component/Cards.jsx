import {useState} from 'react'
import { Container } from "../../layouts/utils";
import avatar from  '../../image/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBook, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
//const  cloth = <FontAwesomeIcon icon={faShirt} fade size="lg" />
const order  = <FontAwesomeIcon icon={faBagShopping} size='2xl' />
const tape = <FontAwesomeIcon icon={faBook } size='2xl' />
const history  = <FontAwesomeIcon icon={faFolderOpen} size='2xl' />
const Cards = () => {
 
  return (
    <div>
          <Container className="wow fadeInUp relative">
            
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 bg-white border w-full border-gray-200 border-opacity-50 
                shadow-2xl rounded-xl">
                    <Link>
                      <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {order}


                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">Orders</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {tape}


                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">Measurement</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                            {history}
                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">History</p>
                    </div>
                    </Link>
                    <Link>
                      <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {order}


                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">Orders</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {tape}


                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">Measurement</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                            {history}
                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">History</p>
                    </div>
                    </Link>

                    <Link>
                      <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {order}


                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">Orders</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {tape}


                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">Measurement</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                            {history}
                        </div>
                        <p className="mt-2 text-sm font-black text-teal-500">History</p>
                    </div>
                    </Link>                </div>
            </Container>
    </div>
  )
}

export default Cards