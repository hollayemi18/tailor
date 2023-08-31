import { Container } from "../../layouts/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faShirt,
    faPerson,
    faPersonDress,
    faChildReaching,
    faPersonPregnant,
    faChalkboardUser,
    faBook,
    faFolderOpen
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cloth = <FontAwesomeIcon icon={faShirt} size="1xl" spin />;
const order = <FontAwesomeIcon icon={faBagShopping} size="1xl" />;
const tape = <FontAwesomeIcon icon={faBook} size="1xl" />;
const history = <FontAwesomeIcon icon={faFolderOpen} size="1xl" />;
const person = <FontAwesomeIcon icon={faPerson} size="1xl" flip />;
const search = <FontAwesomeIcon icon={faChalkboardUser} size="1xl" beat />;
const female = <FontAwesomeIcon icon={faPersonDress} size="1xl" shake />;
const thin = <FontAwesomeIcon icon={faPersonPregnant} size="1xl" fade />;
const children = <FontAwesomeIcon icon={faChildReaching} size="1xl" bounce />;

const Cards = () => {
    return (
        <div>
            <Container className="wow fadeInUp relative">
                <div
                    className="grid grid-cols-3 md:grid-cols-4 gap-1 border-indigo-500-400 border w-full bg-indigo-700 border-opacity-50 
                shadow-1xl rounded-xl"
                >
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-l-3xl shadow-lg ">
                                {order}
                            </div>
                            <p className="mt-2 text-xs font-black  text-white"> Manager Orders</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-none shadow-lg ">
                                {tape}
                            </div>
                            <p className="mt-2 text-xs font-black  text-white">Measurement</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-r-3xl shadow-lg ">
                                {history}
                            </div>
                            <p className="mt-2 text-xs font-black  text-white">History</p>
                        </div>
                    </Link>
                </div>
                <div
                    className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-6  border-indigo-950 bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                >
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                                {person}
                            </div>
                            <p className="mt-2 text-xs font-black text-indigo-900">Male Order</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                                {female}
                            </div>
                            <p className="mt-2 text-xs font-black text-indigo-900">Female order</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                                {search}
                            </div>
                            <p className="mt-2 text-xs font-black text-indigo-900">
                                Material Explore
                            </p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                                {cloth}
                            </div>
                            <p className="mt-2 px-2 text-xs font-black text-indigo-900">
                                Male styles explore
                            </p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                                {thin}
                            </div>
                            <p className="mt-2 text-xs font-black text-indigo-900">
                                female styles explore{" "}
                            </p>
                        </div>
                    </Link>
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-full shadow-lg ">
                                {children}
                            </div>
                            <p className="mt-2  text-xs font-black text-black">
                                children styles explore
                            </p>
                        </div>
                    </Link>{" "}
                </div>
            </Container>
        </div>
    );
};

export default Cards;
