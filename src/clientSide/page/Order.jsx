import React, { useState } from "react";
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter
} from "tw-elements-react";
import { Checkbox, Input } from "../../layouts/field";
const FullscreenModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState();
    const [date, setDate] = useState();
    const [address, setAddress] = useState();
    const [number, setNumber] = useState();
    const [note, setNote] = useState();

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <TERipple rippleColor="white">
                <div className="no underline text-black">
                    <button
                        onClick={() => setShowModal(true)}
                        data-tooltip-target="tooltip-home"
                        type="button"
                        className="inline-flex 
         flex-col items-center justify-center px-5 rounded-l-full hover:text-black hover:bg-black dark:hover:bg-gray-300 rounded-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            viewBox="0 0 448 512"
                        >
                            <path
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                            />
                        </svg>{" "}
                        <span className="btm-nav-label  text-indigo-900">Order</span>
                    </button>
                </div>
            </TERipple>

            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
                <TEModalDialog className="my-4 mx-2">
                    <TEModalContent className="dark:bg-slate-300">
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
                                MAKE AN ORDER
                            </h5>

                            {/* <!--Close button--> */}
                        </div>
                        <div>
                            <h5 className="text-sm mt-2 mb-6  font-normal text-center leading-normal">
                                fill in the required form to place an order
                            </h5>
                        </div>
                        {/* <!--Modal body--> */}
                        <TEModalBody>
                            <div>
                                <Input
                                    label={"Choose Design From Phone"}
                                    id="email"
                                    type="file"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-base text-gray-700 font-semibold">
                                    <span className="text-red-500"></span> Choose Material from Ease
                                    store
                                </label>
                                <div
                                    className=" wow fadeInLeft  mt-3 mb-3  bg-gray-50 transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-2 lg:p-2 text-center shadow-xl"
                                >
                                    <div className="">
                                        <h2 className="font-sm text-center  text-green-800">
                                            Choose from Market
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Input
                                    label={"Schedule date for delivery"}
                                    id="date"
                                    value={date}
                                    type="date"
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <Input
                                    label={"Delivery Address"}
                                    id="address"
                                    value={address}
                                    type="text"
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </div>
                            <div>
                                <Input
                                    label={"Phone number for delivery"}
                                    id="number"
                                    value={number}
                                    type="number"
                                    onChange={e => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="whitespace-normal">
                                <Input
                                    label={"Add On Notes"}
                                    id="note"
                                    value={note}
                                    type="text"
                                    onChange={e => setNote(e.target.value)}
                                />
                            </div>
                            <p className="text-xs  pt-8">
                                <span className="text-red-500">*</span>Please make sure your
                                Measurement is available and updated
                            </p>
                        </TEModalBody>
                        <TEModalFooter>
                            <div>
                                <button
                                    type="button"
                                    className="rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium 
                                    uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="ml-1 inline-block rounded bg-primary\
                                     px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
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
                                    place order
                                </button>
                            </div>
                        </TEModalFooter>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
};
export default FullscreenModal;
