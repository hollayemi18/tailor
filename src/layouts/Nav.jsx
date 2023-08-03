import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Nav = () => {
    //const navigate = useNavigate();
    const handleClick = e => {
        e.preventDefault();
    };

    return (
        <nav className="text-gray-600 p-7 m:p-3 text-base xl:text-lg font-medium bg-white py-4 
        lg:py-[1.1rem] xl:py-8 border-b shadow-sm fixed w-full z-50">
            <div className="flex items-center justify-evenly py-0 xl:py-0">
                <div className="flex items-center space-x-12">
                    <Link to="/" className="flex items-center">
                                     <img src="/images/nav1.png" alt="background" className="h-12 w-12"/>
                                    <h2 className=" font-serif font-semibold text-indigo-600 md:text-4xl text-2xl">Ease </h2>       
                    </Link>

                    <div className="space-x-4 xl:space-x-8 hidden md:block">
                        <Link
                            to="/explore"
                            className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-indigo-600"
                        >
                            Explore
                        </Link>
                        <Link
                            to="/ease"
                            className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-indigo-600"
                        >
                            Why Ease
                        </Link>
                        <Link
                            to="/blog"
                            className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-indigo-600"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-indigo-600"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                    <Menu>
                        <div className="relative">
                            <div className="ml-48 border-0 border-indigo-500 rounded-md  md:hidden">
                           <Link
                            to="/login"
                            className="transition-all text-indigo-600 border-2 rounded-md border-indigo-700 duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 hover:text-indigo-600"
                        >
                            Login
                        </Link>                 
                            </div>

                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Menu.Items>
                                    <div className="absolute right-0 z-10 w-48 px-2 py-1 mt-1 text-gray-600 bg-white border rounded-md shadow">
                                        <Menu.Item>
                                            <Link
                                                to={"/dashboard"}
                                                className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500"
                                            >
                                                <AiOutlineDashboard className="h-5 w-5" />
                                                <span>Dashboard</span>
                                            </Link>
                                        </Menu.Item>
                                        <hr />

                                        <Menu.Item>
                                            <Link
                                                to={"#profile"}
                                                className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                                <span>Profile</span>
                                            </Link>
                                        </Menu.Item>
                                        <hr />

                                        <Menu.Item>
                                            <a
                                                href={"/logout"}
                                                className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500"
                                                onClick={handleClick}
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    />
                                                </svg>
                                                <span>Logout</span>
                                            </a>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <div className="flex items-center space-x-3 hidden md:block">
                        <Link
                            to="/login"
                            className="transition-all pr-8 duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 hover:text-indigo-600"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                        >
                            Sign Up
                        </Link>
                    </div>


                    <div className="md:hidden relative">
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-indigo-600 p-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <HiMenu className="h-7 w-7" />
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 p-3 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="">
                                        <Menu.Item>
                                            <Link
                                                to="/explore"
                                                className="block transition-all duration-300 font-medium py-2 hover:text-indigo-600"
                                            >
                                    
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <Link
                                                to="/ease"
                                                className="block transition-all duration-300 font-medium py-2 hover:text-indigo-600"
                                            >
                                                Why Ease
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <Link
                                                to="/blog"
                                                className="block transition-all duration-300 font-medium py-2 hover:text-indigo-600"
                                            >
                                            blog
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <Link
                                                to="/contact"
                                                className="block transition-all duration-300 font-medium py-2 hover:text-indigo-600"
                                            >
                                                Contact Us
                                            </Link>
                                        </Menu.Item>

                                       

                                        <div className="flex items-center space-x-3">
                                            <Menu.Item>
                                                <Link
                                                    to="/login"
                                                    className="w-1/2 text-center transition-all duration-300 px-3 font-medium py-1.5 text-indigo-900 border border-indigo-900 rounded-md focus:outline-none hover:text-white hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                                                >
                                                    Login
                                                </Link>
                                            </Menu.Item>

                                            <Menu.Item>
                                                <Link
                                                    to="/register"
                                                    className="transition-all block text-center w-1/2 duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 border border-indigo-600 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                                                >
                                                    Sign Up
                                                </Link>
                                            </Menu.Item>
                                        </div>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
            </div>
        </nav>
    );
};

export default Nav;
