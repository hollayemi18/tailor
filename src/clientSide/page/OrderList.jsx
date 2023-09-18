import React, { useState } from "react";
import { TEModal, TEModalDialog, TEModalContent, TEModalBody } from "tw-elements-react";
import avatar from "../../image/avatar.jpg";
import { v4 as uuidv4 } from "uuid";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//import { toast, ToastContainer } from "react-toastify";
//import { Input } from "../../layouts/field";
const order = <FontAwesomeIcon icon={faBagShopping} size="1xl" />;

const FullscreenModal = () => {
    function generateShortId() {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }
    const date = new Date();
    const orderDate = date.toLocaleDateString();

    const [showModal, setShowModal] = useState(false);
    const [money, setUsername] = useState("18,520");
    const [email, setEmail] = useState("olayemi521@gmail.com");
    const [phone, setPhone] = useState("08076771973");
    const [street, setstreet] = useState("Road 3 omolayo, Ibadan");

    return (
        <div>
            {/* <!-- Button trigger modal --> */}

            <div className="no underline text-black">
                <Link
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <div className="text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium">
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-l-3xl shadow-lg ">
                            {order}
                        </div>
                        <p className="mt-2 text-xs font-black  text-white"> order</p>
                    </div>
                </Link>
            </div>

            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} scrollable>
                <TEModalDialog className="rounded-3xl my-2 mx-2">
                    <TEModalContent className="dark:bg-slate-200">
                        <button
                            type="button"
                            className="box-content rounded
                                border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 30 30"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 float-right mr-2 mt-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="font-black ">
                            {/* <!-- Modal title --> */}
                            <h5 className="text-xl py-5 font-medium text-center leading-normal">
                                OrderLists
                            </h5>

                            {/* <!--Close button--> */}
                        </div>
                        <div></div>
                        {/* <!--Modal body--> */}
                        <TEModalBody>
                            <div
                                className=" wow fadeInLeft w-full mt-2 mb-2 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-2 shadow-xl"
                            >
                                <p>{orderDate}</p>
                                <div className="text-center pt-2 flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">ID ref</h4>
                                    <p className="text-sm text-green-600"> {generateShortId()}</p>
                                </div>
                                <div className="text-center flex flex-row justify-between  lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Statues</h4>
                                    <button
                                        type="button"
                                        className="ml-1 inline-block rounded bg-green-600
                                     px-3 text-xs font-normal leading-normal
                                      text-white shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                       focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba
                                        (59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9
                                            px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_r
                                                gba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_r
                                                    gba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0
                                                        _rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_1
                                                            8px_0_rgba(59,113,202,0.1)]"
                                    >
                                        in progress
                                    </button>
                                </div>
                                <div className="text-center flex flex-row justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Type</h4>
                                    <p className="pr-3 text-green-600">Online</p>
                                </div>
                                <div className="text-center flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">
                                        Total Cost
                                    </h4>
                                    <p className="text-sm pr-3 text-green-600"> #{money}</p>
                                </div>
                            </div>
                            <div
                                className=" wow fadeInLeft w-full mt-4 mb-4 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-2 shadow-xl"
                            >
                                <p>{orderDate}</p>
                                <div className="text-center pt-4 flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">ID ref</h4>
                                    <p className="text-sm text-green-600"> {generateShortId()}</p>
                                </div>
                                <div className="text-center flex flex-row justify-between  lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Statues</h4>
                                    <button
                                        type="button"
                                        className="ml-1 inline-block rounded bg-green-600
                                     px-3 text-xs font-normal leading-normal
                                      text-white shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                       focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba
                                        (59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9
                                            px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_r
                                                gba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_r
                                                    gba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0
                                                        _rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_1
                                                            8px_0_rgba(59,113,202,0.1)]"
                                    >
                                        in progress
                                    </button>
                                </div>
                                <div className="text-center flex flex-row justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Type</h4>
                                    <p className="pr-3 text-green-600">Online</p>
                                </div>
                                <div className="text-center flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">
                                        Total Cost
                                    </h4>
                                    <p className="text-sm pr-3 text-green-600"> #{money}</p>
                                </div>
                            </div>
                            <div
                                className=" wow fadeInLeft w-full mt-4 mb-4 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-2 shadow-xl"
                            >
                                <p>{orderDate}</p>
                                <div className="text-center pt-2 flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">ID ref</h4>
                                    <p className="text-sm text-green-600"> {generateShortId()}</p>
                                </div>
                                <div className="text-center flex flex-row justify-between  lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Statues</h4>
                                    <button
                                        type="button"
                                        className="ml-1 inline-block rounded bg-green-600
                                     px-3 text-xs font-normal leading-normal
                                      text-white shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                       focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba
                                        (59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9
                                            px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_r
                                                gba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_r
                                                    gba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0
                                                        _rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_1
                                                            8px_0_rgba(59,113,202,0.1)]"
                                    >
                                        in progress
                                    </button>
                                </div>
                                <div className="text-center flex flex-row justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Type</h4>
                                    <p className="pr-3 text-green-600">Online</p>
                                </div>
                                <div className="text-center flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">
                                        Total Cost
                                    </h4>
                                    <p className="text-sm pr-3 text-green-600"> #{money}</p>
                                </div>
                            </div>
                            <div
                                className=" wow fadeInLeft w-full mt-4 mb-4 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-2 shadow-xl"
                            >
                                <p>{orderDate}</p>
                                <div className="text-center pt-4 flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">ID ref</h4>
                                    <p className="text-sm text-green-600"> {generateShortId()}</p>
                                </div>
                                <div className="text-center flex flex-row justify-between  lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Statues</h4>
                                    <button
                                        type="button"
                                        className="ml-1 inline-block rounded bg-green-600
                                     px-3 text-xs font-normal leading-normal
                                      text-white shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                       focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba
                                        (59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9
                                            px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_r
                                                gba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_r
                                                    gba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0
                                                        _rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_1
                                                            8px_0_rgba(59,113,202,0.1)]"
                                    >
                                        in progress
                                    </button>
                                </div>
                                <div className="text-center flex flex-row justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">Type</h4>
                                    <p className="pr-3 text-green-600">Online</p>
                                </div>
                                <div className="text-center flex flex-row  justify-between lg:py-16 text-indigo-800 font-medium">
                                    <h4 className="text-sm font-black  text-indigo-700">
                                        Total Cost
                                    </h4>
                                    <p className="text-sm pr-3 text-green-600"> #{money}</p>
                                </div>
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
};
export default FullscreenModal;
