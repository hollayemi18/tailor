import React, { useState } from "react";
import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalBody } from "tw-elements-react";
//import { toast, ToastContainer } from "react-toastify";
//import { Input } from "../../layouts/field";
import logout from "../../image/logout.png";
const FullscreenModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <TERipple rippleColor="white">
                <div className="no underline text-black">
                    <button
                        onClick={() => {
                            setShowModal(true);
                        }}
                        data-tooltip-target="tooltip-settings"
                        type="button"
                        className="inline-flex flex-col 
         items-center justify-center px-5 hover:bg-gray-50 hover:text-gray-950 dark:hover:bg-gray-300 rounded-3xl"
                    >
                        <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            fill="black"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                        </svg>
                        <span className="btn-nav-label text-indigo-900">Settings</span>
                    </button>
                </div>
            </TERipple>

            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
                <TEModalDialog className="my-4 mx-2">
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
                            <h5 className="text-xl font-medium text-center leading-normal">
                                SETTINGS
                            </h5>

                            {/* <!--Close button--> */}
                        </div>
                        <div></div>
                        {/* <!--Modal body--> */}
                        <TEModalBody>
                            <div
                                className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-2 mb-2 border-black bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                            ></div>
                            <div>
                                <div className="flex flex-row mt-6  justify-between">
                                    <h2>
                                        <button
                                            type="button"
                                            className="rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium 
                                    uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                        >
                                            Mode Preference
                                        </button>
                                    </h2>
                                    <div className="flex flex-row ">
                                        <button
                                            type="button"
                                            className="ml-1 inline-block rounded bg-primary\
                                     px-3 pb-1 pt-1 text-xs font-medium  leading-normal
                                      text-black shadow-[0_4px_9px_-4px_#3b71ca]
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
                                            Light
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-1 inline-block rounded bg-black
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
                                            Dark
                                        </button>
                                    </div>
                                </div>
                                <i className="text-xs font-extralight text-blue-800">
                                    change mode colour from black to white
                                </i>
                            </div>
                            <div
                                className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-2 mb-2 border-black bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                            ></div>
                            <div>
                                <div className="flex flex-row mt-6 justify-between">
                                    <h2>
                                        <button
                                            type="button"
                                            className="rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium 
                                    uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                        >
                                            profile
                                        </button>
                                    </h2>
                                    <div className="flex flex-row ">
                                        <button
                                            type="button"
                                            className="ml-1 inline-block rounded bg-primary\
                                     px-3 pb-1 pt-1 text-xs font-medium  leading-normal
                                      text-black shadow-[0_4px_9px_-4px_#3b71ca]
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
                                            <em>update</em>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <i className="text-xs font-extralight text-blue-800">
                                        update profile for easy and hassle free delivery
                                    </i>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-2 mb-2 border-black bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                            ></div>
                            <div className="flex flex-row my-6 justify-between">
                                <h2>
                                    <button
                                        type="button"
                                        className="rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium 
                                    uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                    >
                                        CHANGE PASSWORD
                                    </button>
                                </h2>
                                <div className="flex flex-row ">
                                    <button
                                        type="button"
                                        className="ml-1 inline-block rounded bg-primary\
                                     px-3 pb-1 pt-1 text-xs font-medium  leading-normal
                                      text-black shadow-[0_4px_9px_-4px_#3b71ca]
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
                                        <em>change</em>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="gap-1 mt-2 mb-2 border-black bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl"
                            ></div>
                            <div className="flex flex-row my-3">
                                <h2>
                                    <button
                                        type="button"
                                        className="rounded bg-primary-100 pl-6 pb-2 pt-2.5 text-lg font-medium 
                                     leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100
                                      focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                    >
                                        <em>Logout</em>
                                    </button>
                                </h2>
                                <img src={logout} className="-ml-3" height={40} width={50} alt="" />
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
};
export default FullscreenModal;
