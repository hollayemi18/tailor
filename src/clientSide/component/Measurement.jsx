import React, { useState } from "react";
import { TEModal, TEModalDialog, TEModalContent, TEModalBody } from "tw-elements-react";
import avatar from "../../image/avatar.jpg";
import { v4 as uuidv4 } from "uuid";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AddMeasure from "./AddMeasure";
//import { toast, ToastContainer } from "react-toastify";
//import { Input } from "../../layouts/field";
const order = <FontAwesomeIcon icon={faBook} size="1xl" />;

const FullscreenModal = () => {
    const [neck, setNeck] = useState("23");
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
                        <div className="flex  items-center justify-center bg-slate-100 mx-5 py-3 shadow-lg ">
                            {order}
                        </div>
                        <p className="mt-2 text-xs font-black  text-white"> measurement</p>
                    </div>
                </Link>
            </div>

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
                            <h5 className="text-xl font-medium text-center sm">My Measurement</h5>
                            <h5 className="text-xs text-center pt-2 text-green-800">
                                <span className="text-red-800 font-extrabold pr-1 mt-2">*</span>
                                Please note measuremnt are measured in INCHES
                            </h5>
                            {/* <!--Close button--> */}
                        </div>
                        <div></div>
                        {/* <!--Modal body--> */}
                        <TEModalBody>
                            <div
                                className=" wow fadeInLeft py-5 w-full mt-4 mb-4 mx-auto bg-white transition-all 
                                duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-2 lg:p-4 text-center flex flex-col space-y-10 shadow-xl"
                            >
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Cap_size</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm"> Back</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Neck_round</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Chest</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Slim</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Side_Length</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Bicep</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Sleeve_Short</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Long_sleeve</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Waist</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Hips</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Inside_trouser</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Thigh</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Trouser_lenght</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Round_ankle</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Agbada_L</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row ">
                                        <label className="text-sm">Wrist_round</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                                        >
                                            {neck}
                                        </button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <label className="text-sm"> Agbada_S</label>
                                        <button
                                            className="
                                        ml-4 inline-block font-extrabold  rounded bg-primary/
                                     px-5 text-sm 
                                    text-black shadow-[0_4px_9px_-4px_#3b71ca]
                                       transition duration-150 ease-in-out hover:bg-primary-600 
                                       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        >
                                            {" "}
                                            {neck}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <AddMeasure />
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
};
export default FullscreenModal;
