import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../image/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const notify = <FontAwesomeIcon icon={faCartPlus} size="xl" />;
const bell = <FontAwesomeIcon icon={faBell} size="xl" />;
const Navbar = () => {
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    //const [token, setToken] = useState("");
    useEffect(() => {
        // Fetch user information using token from your Express API
        const token = localStorage.getItem("token"); // Assuming you have stored the token after login
        axios
            .get("http://localhost:8080/user/", { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                setUsername(response.data);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);
    return (
        <div className="flex flex-row pt-0 mx-1 justify-between lg:justify-evenly py-0xl:py-0 border-b-1 ">
            <div className="ml-5 flex flex-row">
                <img
                    className="w-12 rounded-full  mt-6 ring-offset-base-100 "
                    src={avatar}
                    alt="DP"
                />
                <div className="mt-6 ml-2 flex flex-col">
                    <em className="text-1xl">
                        Hi
                        <span className="text-emerald-800 font-serif ml-2">
                            {username.username}!
                        </span>
                    </em>
                    <i className="text-teal-700 font-serif">
                        welcome
                        <span className="text-teal-700 font-serif ml-1">back</span>
                    </i>
                </div>
            </div>
            <div className="mt-8 mr-5 hover:bg-white grid bg-transparent grid-cols-2 gap-6 text-teal-800">
                <Link> {notify}</Link>
                <Link> {bell}</Link>
            </div>
        </div>
    );
};

export default Navbar;
