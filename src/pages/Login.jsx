import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {Link}  from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from "../layouts/buttons";
import { Checkbox, Input } from "../layouts/field";
import axios from 'axios'
import {toast} from 'react-toastify'
const Login = () => {
  const navigate = useNavigate();
    const defaultMessage = {
        email: [],
        password: []
    };
    const [invalid, setInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    
    const login =async (e) => {
        e.preventDefault()

          const loginAuth = await axios.post("http://localhost:8080/login", {
               email,
                password
           },{withCredentials: true})
        
        setTimeout(() => {
            const newErrorMessage = defaultMessage;
            if (!email) {
                newErrorMessage.email = ["This field is required"];
            }
            if (!password) {
                newErrorMessage.password = ["This field is required"];
            }
        
            if (loginAuth) {
                setInvalid(true);
                toast.success("success", "Successful connection");;
            
            }

            if (!email || !password || email === "admin" || password === "12345" ) {
                
                navigate("/dashboard")
              
                   

               


            setErrorMessage(newErrorMessage);
        }, 3000);
    };

    return (
       <div className="flex flex-col gap-2 mb-48 mx-20 md:mx-72 pt-10">
            <h3 className="text-center text-xl font-semibold text-gray-700">Login to Account</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Please sign-in to your account and continue the adventure.
            </p>

            {invalid && (
                 toast.error('Invalid email or password')
            )}

            <form className="space-y-5" onSubmit={login}>
                <div>
                    <Input
                        label={"Email"}
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={errorMessage.email}
                    />
                </div>

                <div>
                    <Input
                        label={"Password"}
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={errorMessage.password}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Checkbox id="remember" label="Remember Me" />

                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                <PrimaryButton onClick={login}>
                    
                    <span>Login to account</span>
                </PrimaryButton>

                <div className="flex items-center justify-center space-x-3">
                    <hr className="w-12" />
                    <span className="font-bold uppercase text-xs text-gray-400">Or</span>
                    <hr className="w-12" />
                </div>

                <div className="flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold">
                    <SecondaryButton as="a" href="#auth-google">
                        <FcGoogle className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5" />

                        <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
                            Continue with Google
                        </span>
                    </SecondaryButton>

                
                </div>

                <p className="text-sm text-center">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
