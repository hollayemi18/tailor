import { Link } from "react-router-dom";

import Order from "./page/Order";
import Setting from "./page/Settings";
import Profile from "./page/Profile";

const Bottom = () => {
    return (
        <div>
            <div
                className="fixed bg-neutral-100 shadow-indigo-950 z-50 w-full px-4 h-16 max-w-lg
 border-gray-200 rounded-full bottom-2  "
            >
                {/* <!-- Button trigger modal --> */}

                <div className=" grid h-full max-w-lg grid-cols-4 my-2 shadow-indigo-900 mx-auto">
                    <Order />
                    <Link to="/dashboard/wallet">
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
                    </Link>
                    <Setting />
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default Bottom;
