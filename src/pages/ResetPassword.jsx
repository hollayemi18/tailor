import { PrimaryButton } from "../layouts/buttons";
import { Input } from "../layouts/field";
import {Link} from 'react-router-dom'

const ResetPassword = () => {
    return (
         <div className="flex flex-col gap-2 mx-20 md:mx-72 pt-10">
            <h3 className="text-center text-xl font-semibold text-gray-700">Update password</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Enter and confirm the new password to make the change.
            </p>

            <form className="space-y-5">
                <div>
                    <Input
                        label={"New password"}
                        id="new_password"
                        type="password"
                        placeholder="Enter new password"
                    />
                </div>

                <div>
                    <Input
                        label={"Confirm password"}
                        id="confirm_password"
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>

                <PrimaryButton>Update Password</PrimaryButton>

                <p className="text-sm text-center">
                    <Link href="/login">Back to Login</Link>
                </p>
            </form>
        </div>
    );
};

export default ResetPassword;
