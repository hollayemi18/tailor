import React, { useState } from "react";
import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalBody } from "tw-elements-react";
import avatar from "../../image/avatar.jpg";
//import { toast, ToastContainer } from "react-toastify";
//import { Input } from "../../layouts/field";
const FullscreenModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("Olayemi Olasunkanmi");
    const [email, setEmail] = useState("olayemi521@gmail.com");
    const [phone, setPhone] = useState("08076771973");
    const [street, setstreet] = useState("Road 3 omolayo, Ibadan");

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
                            className="w-6 h-6 mb-1 text-2sgray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
                        <span className="btn-nav-label text-indigo-900">Profile</span>
                    </button>
                </div>
            </TERipple>

            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
                <TEModalDialog className="rounded-3xl my-9 mx-4">
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
                                PROFILE
                            </h5>

                            {/* <!--Close button--> */}
                        </div>
                        <div></div>
                        {/* <!--Modal body--> */}
                        <TEModalBody>
                            <img
                                className="w-20 rounded-full  mt-6 ring-offset-base-100 "
                                src={avatar}
                                alt="DP"
                            />

                            <div className="my-6">
                                <h2 className="text-center font-extrabold"> User information</h2>
                                <div className="mx-4 mt-4 flex flex-row justify-between">
                                    <label>Full-Name</label>
                                    <em className="font-extralight text-sm "> {username}</em>
                                </div>
                                <div className="mx-4 mt-4 flex flex-row justify-between">
                                    <label>Email</label>
                                    <em className="font-extralight text-sm "> {email}</em>
                                </div>
                                <div className="mx-4 mt-4 flex flex-row justify-between">
                                    <label>Phone</label>
                                    <em className="font-extralight text-sm "> {phone}</em>
                                </div>
                                <div className="mx-4 mt-4 flex flex-row justify-between">
                                    <label>Address</label>
                                    <em className="font-extralight text-sm "> {street}</em>
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
