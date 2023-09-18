import React, { useState } from "react";
import { TEModal, TEModalDialog, TEModalContent, TEModalBody } from "tw-elements-react";
import avatar from "../../image/avatar.jpg";
import { v4 as uuidv4 } from "uuid";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//import { toast, ToastContainer } from "react-toastify";
//import { Input } from "../../layouts/field";
const order = <FontAwesomeIcon icon={faBook} size="1xl" />;

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
            {/* <!-- Button trigger modal --> */}{" "}
            <button
                onClick={() => {
                    setShowModal(true);
                }}
                className=" wow fadeInLeft text-green-900 mx-16 px-4 mt-4 mb-4  bg-gray-100 transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl py-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
            >
                {" "}
                Edit Measurement
            </button>
            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} FullscreenModal>
                <TEModalDialog className="rounded-3xl my-2 mx-1">
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
                            <h5 className="text-xl font-medium text-center sm">Edit Measurement</h5>
                            <h5 className="text-xs text-center pt-2 text-green-800">
                                <span className="text-red-800 font-extrabold pr-1 mt-2">*</span>
                                Please note measuremnt are measured in INCHES
                            </h5>
                            {/* <!--Close button--> */}
                        </div>
                        {/* <!--Modal body--> */}
                        <TEModalBody>
                            <div
                                className=" wow fadeInLeft  mt-2 mb-4 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-2 shadow-xl"
                            >
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Cap_size</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Back</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Neck</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Chest</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Slim</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Side_Lenght</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Bicep</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Sleeve_short</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Long_sleeve</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Waist</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Hips</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Inside_trouser</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Thigh</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Trouser_lenght</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Round_ankle</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Cap_size</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Wrist_ankle</label>
                                        <input
                                            type="number"
                                            className="ml-2  font-sm  py-0.5 rounded bg-primary text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Agbada_L</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Agbada_S</label>
                                        <input
                                            type="number"
                                            className="ml-4  font-sm  py-0.5 rounded bg-primary px-0 text-sm "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    type="button"
                                    className="ml-1 inline-block rounded bg-green-600
                                     px-8 py-2 text-sm font-normal leading-normal
                                      text-white shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                      "
                                >
                                    Save
                                </button>
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
};
export default FullscreenModal;
