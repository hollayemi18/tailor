import { Container } from "../../layouts/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBook, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const order = <FontAwesomeIcon icon={faBagShopping} size="1xl" />;
const tape = <FontAwesomeIcon icon={faBook} size="1xl" />;
const history = <FontAwesomeIcon icon={faFolderOpen} size="1xl" />;

const Cards = () => {
    const [amount, setAmount] = useState("123.0");
    return (
        <div>
            <div
                className=" wow fadeInLeft mx-6 mt-8 mb-4  md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl px-6 py-3 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
            >
                <div className="flex flex-row justify-between">
                    <img
                        className="text-indigo-900"
                        src="/images/update-payment.png"
                        alt=""
                        width={50}
                        height={70}
                    />
                    <div className="flex flex-col pl-10">
                        <em className="font-bold text-green-800">Balance</em>
                        <h2 className="text-2xl text-blue-800 pt-1">#{amount}</h2>
                    </div>
                </div>
            </div>
            <Container className="wow fadeInUp relative">
                <div
                    className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-2 mb-2 border-indigo-950 bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                ></div>
                <div
                    className="grid grid-cols-3 md:grid-cols-4 gap-1 border-indigo-500-400 border w-full bg-blue-950 border-opacity-50 
                shadow-1xl rounded-xl"
                >
                    <Link>
                        <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                            <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-l-3xl shadow-lg ">
                                {order}
                            </div>
                            <p className="mt-2 text-xs font-black  text-white"> order</p>
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
                    className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-2  border-indigo-950 bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                ></div>
                <div
                    className=" wow fadeInLeft w-full mt-4 mb-4 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
                >
                    <div className="text-center flex flex-row justify-between  lg:py-16 text-indigo-800 font-medium">
                        <em className="text-sm font-black  text-indigo-700">Total Order</em>
                        <p className="pr-3 text-green-600">10</p>
                    </div>
                    <div className="text-center flex flex-row justify-between lg:py-16 text-indigo-800 font-medium">
                        <em className="text-sm font-black  text-indigo-700">Pending</em>
                        <p className="pr-3 text-green-600"> 1</p>
                    </div>
                    <div className="text-center flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                        <em className="text-sm font-black  text-indigo-700">In Progress Order</em>
                        <p className="pr-3 text-green-600"> 3</p>
                    </div>
                </div>
            </Container>

            <div
                className=" wow fadeInLeft mx-16 mt-4 mb-4  md:w-full bg-gray-50 transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl py-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
            >
                <div className="">
                    <h2 className="font-bold text-center text-green-800">Explore Styles</h2>
                </div>
            </div>
            <div
                className=" wow fadeInLeft mx-16 mt-4 mb-4 md:w-full bg-gray-50 transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
            >
                <div className="">
                    <h2 className="font-bold text-center  text-green-800">Explore Market</h2>
                </div>
            </div>
        </div>
    );
};

export default Cards;
