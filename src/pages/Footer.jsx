import {
    SlSocialFacebook,
    SlSocialInstagram,
    SlSocialLinkedin,
    SlSocialTwitter
} from "react-icons/sl";

import { Container } from "../layouts/utils";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year);
    return (
        <footer className="bg-[#FBFBFF] py-24 mt-24 border-t border-indigo-100">
            <Container>
                <img
                    src="/images/homepage2.jpg"
                    className="w-full object-center object-cover border-b"
                    alt=""
                />

                <div className="mt-8 flex items-center justify-between">
                    <p className="text-gray-500 uppercase text-xs md:text-base">
                        Copyright © {year} Grandalat. All Rights Reserved.
                    </p>

                    <div className="flex items-center space-x-4 text-indigo-800">
                        <span className="bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2">
                            <SlSocialFacebook className="w-6 h-6" />
                        </span>

                        <span className="bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2">
                            <SlSocialTwitter className="w-6 h-6" />
                        </span>

                        <span className="bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2">
                            <SlSocialInstagram className="w-6 h-6" />
                        </span>

                        <span className="bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2">
                            <SlSocialLinkedin className="w-6 h-6" />
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
