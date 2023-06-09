import React, { useState } from "react";

import { PrimaryButton } from "../layouts/buttons";
import { Input } from "../layouts/field";

import {Link} from 'react-router-dom'
const ForgotPassword = () => {
    const [validationMessage, setValidationMessage] = useState([]);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            if (email) {
                if (email !== (process.env.REACT_APP_LOGIN || "paydunya@gmail.com")) {
                    alert("error", "Failed to reload account");
                    setValidationMessage(["The email does not match a user"]);
                } else {
                    alert("success", "An email has been sent to you to reset your password.");
                    setEmail("");
                    setValidationMessage([]);
                }
            } else {
                alert("error", "Failed to reload account");
                setValidationMessage(["This field is required"]);
            }
        }, 3000);
    };

    return (
         <div className="flex flex-col gap-2 mx-20 md:mx-72 pt-10">
      
            <h3 className="text-center text-xl font-semibold text-gray-700">Reset password</h3>
            <p className="text-center text-sm mt-2 mb-10">
                If you forgot your password, don't worry! we’ll email you <br /> instructions to
                reset your password.
            </p>

            <form className="space-y-5">
                <div>
                    <Input
                        label={"Email"}
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        error={validationMessage}
                    />
                </div>

                <PrimaryButton onClick={onSubmit} disabled={loading}>
                
                    <span>Send Reset Link</span>
                </PrimaryButton>

                <p className="text-sm text-center">
                    <Link to="/login">Back to Login</Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;
