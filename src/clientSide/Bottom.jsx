import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Order from "./page/Order";
const Bottom = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div
                className="fixed bg-neutral-100 shadow-indigo-950 z-50 w-full px-4 h-16 max-w-lg
 border-gray-200 rounded-full bottom-2  "
            >
                {/* <!-- Button trigger modal --> */}

                <div className=" grid h-full max-w-lg grid-cols-4 my-2 shadow-indigo-900 mx-auto">
                    <Order />
                    <div className="no-underline text-black ">
                        <div className="btn-nav">
                            <button
                                data-tooltip-target="tooltip-wallet"
                                type="button"
                                className="inline-flex 
            flex-col items-center justify-center px-5 hover:text-black hover:bg-gray-50 dark:hover:bg-gray-300 rounded-3xl"
                            >
                                <svg
                                    className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                    fill="black"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 
                 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                    ></path>
                                </svg>
                                <span className="btm-nav-label text-indigo-900">Wallet</span>
                            </button>
                        </div>
                    </div>
                    <Link to="/dashboard/setting" className="no-underline text-black ">
                        <button
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
                    </Link>

                    <Link to="/dashboard/profile" className="no-underline text-black ">
                        <button
                            data-tooltip-target="tooltip-profile"
                            type="button"
                            className="inline-flex flex-col 
           items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-300 hover:text-black rounded-2xl"
                        >
                            <svg
                                className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                fill="black"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                ></path>
                            </svg>
                            <span className="btm-nav-label font text-indigo-900">Profile</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bottom;
