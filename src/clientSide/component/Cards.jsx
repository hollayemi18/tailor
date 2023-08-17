import { Container } from "../../layouts/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping,faShirt,faPerson,faPersonDress,
    faChildReaching,faPersonPregnant, faChalkboardUser, faBook, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const  cloth = <FontAwesomeIcon icon={faShirt} size="2xl" />
const order  = <FontAwesomeIcon icon={faBagShopping} size='2xl' />
const tape = <FontAwesomeIcon icon={faBook } size='2xl' />
const history  = <FontAwesomeIcon icon={faFolderOpen} size='2xl' />
const person = <FontAwesomeIcon icon={faPerson}  size="2xl"/>
const search = <FontAwesomeIcon icon={faChalkboardUser} size="2xl"/>
const female =<FontAwesomeIcon icon={faPersonDress} size="2xl" />
const thin  = <FontAwesomeIcon icon={faPersonPregnant} size="2xl" />
const children  =<FontAwesomeIcon icon={faChildReaching}  size="2xl"/>

const Cards = () => {
 
  return (
    <div>
          <Container className="wow fadeInUp relative">
            
                <div className="grid grid-cols-3 md:grid-cols-4 gap-1 bg-white border w-full border-gray-200 border-opacity-50 
                shadow-2xl rounded-xl">
                    <Link>
                      <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {order}


                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500"> Manager Orders</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {tape}


                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">Measurement</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                            {history}
                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">History</p>
                    </div>
                    </Link>
                    <Link>
                      <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {person}


                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">Male Order</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {female}


                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">Female order</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                            {search}
                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">Material Explore</p>
                    </div>
                    </Link>

                    <Link>
                      <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {cloth}


                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">Male styles explore</p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                        {thin}
                        </div>
                        <p className="mt-2 text-xs font-black text-teal-500">female styles explore </p>
                    </div>
                    </Link>
                    <Link>
                    <div className="text-center py-5  lg:py-16 space-y-3 text-teal-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                            {children}
                        </div>
                        <p className="mt-2  text-xs font-black text-teal-500">children styles explore</p>
                    </div>
                    </Link>                </div>
            </Container>
    </div>
  )
}

export default Cards