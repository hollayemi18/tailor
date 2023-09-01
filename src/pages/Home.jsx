import { Container } from "../layouts/utils";
import Banner from "../layouts/Banner";
import Accordion from "../layouts/Accordion";
import Footer from "./Footer";
import Nav from "../layouts/Nav";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRipple } from "mdb-react-ui-kit";
const Home = () => {
    return (
        <div>
            <Nav />

            <Banner />

            <Container className="wow slideInLeft relative -mt-[200px]">
                <div className="grid grid-cols-2 md:grid-cols-4 border-green-300  bg-white border shadow-2xl rounded-xl">
                    <div className="text-center py-2 lg:py-16 space-y-3  text-indigo-600 font-medium">
                        <div className="flex  items-center justify-center  wow fadeInRight">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-7"
                            >
                                <path d="M10.5 18a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                                <path
                                    fillRule="evenodd"
                                    d="M7.125 1.5A3.375 3.375 0 003.75 4.875v14.25A3.375 3.375 0 007.125 22.5h9.75a3.375 3.375 0 003.375-3.375V4.875A3.375 3.375 0 0016.875 1.5h-9.75zM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 016 19.125V4.875z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p className="mt-1 text-sm font-normal wow fadeInLeft text-color1">
                            ONLINE ORDER
                        </p>
                    </div>
                    <div className="text-center py-2 lg:py-16 space-y-3 text-indigo-700 font-medium">
                        <div className="flex  items-center justify-center  wow slide-right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-7"
                            >
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>
                        </div>
                        <p className="mt-2 text-sm font-normal text-color1">PICKUP & DELIVERY</p>
                    </div>
                    <div className="text-center py-8 lg:py-16 space-y-3 text-indigo-600 font-medium">
                        <div className="flex  items-center justify-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-7"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p className="mt-2 text-sm font-normal text-color1">CONVIENCE</p>
                    </div>
                    <div className="text-center py-8 lg:py-16 space-y-3 text-indigo-600 font-medium">
                        <div className="flex  items-center justify-center wow fadeInUp">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-7"
                            >
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                        </div>
                        <p className="mt-2 text-sm font-normal text-color1">DESIGN CONSULTATION</p>
                    </div>
                </div>
            </Container>

            <div className="wow bounceInDown text-center bg-gray-200 shadow-2xl text-indigo-900 space-y-4 mt-12 mb-8">
                <h2 className="text-2xl lg:text-2xl font-bold text-center">Be yourself.</h2>
                <h4 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold">
                    Know your proportions. <br className="hidden lg:block" />
                </h4>
                <div>
                    <em className="text-center"> And have a good lifestyle.</em>
                </div>
                <p className="text-sm sm:text-base px-10 font-medium">
                    Sign up to start ordering online and managing your fit details.
                </p>
                <div className="mt-20 mx-32">
                    <Link
                        to="/register"
                        className="px-4 transition-all block text-center  duration-300
                          lg:px-4   xl:px-4 font-medium py-2  xl:py-2 border
                          border-indigo-600 bg-indigo-600 text-white rounded-md 
                          focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            <Container className="wow fadeInLeft pt-3 flex items-center flex-col-reverse xl:flex-col xl:space-y-0  xl:space-x-5  ">
                <div className="w-full xl:w-1/2 wow bounceInUp">
                    <img
                        src="/images/eas3.jpg"
                        className="h-auto w-full object-contain object-center align-middle mt-16 xl:mt-0"
                        alt=""
                    />
                </div>

                <div className="wow fadeInLeft w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-900">
                    <div
                        className="transition-all duration-300 border border-pink-700 rounded-3xl p-12 mx-4 lg:p-8 
                    text-center flex flex-col space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/how1.jpg" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">SIGN UP</h3>
                        <p className="max-w-lg">
                            create an account or log in with your email and password
                        </p>
                    </div>

                    <div
                        className="wow slideInLeft transition-all duration-300 border border-indigo-200 rounded-3xl
                     p-12 mx-4 lg:p-8 text-center flex flex-col space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/how2.jpg" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            CLICK ORDER
                        </h3>
                        <p className="max-w-lg">
                            navigate and click on order Link to make an order
                        </p>
                    </div>

                    <div
                        className="wow fadeInRight transition-all duration-300 border border-green-600 rounded-3xl 
                    p-12 lg:p-8 mx-4 text-center flex flex-col space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/homepage3.jpg" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            CHOOSE DESIGN
                        </h3>
                        <p className="max-w-lg">
                            You can choose your design from cart or from phone gallery
                        </p>
                    </div>

                    <div
                        className="wow slideInRight transition-all duration-300 border border-indigo-200 
                    rounded-3xl p-12 mx-4 lg:p-8 text-center flex flex-col space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/how4.jpg" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            QUALITY MATERIAL
                        </h3>
                        <p className="max-w-lg">
                            Quality material are displayed at the ease online market,choose by
                            clicking
                        </p>
                    </div>

                    <div
                        className="wow fadeInUp transition-all duration-300 border border-yellow-300 rounded-3xl p-12  mx-4
                     lg:p-8 text-center flex flex-col space-y-1 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center wow fadeInDown">
                            <img src="/images/how6.jpg" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            MEASUREMENT
                        </h3>
                        <p className="max-w-lg">
                            input your body size,using our A.I model or by watching our video on how
                            to take one
                        </p>
                    </div>

                    <div
                        className="wow bounceInDown transition-all duration-300 border
                     border-indigo-200 rounded-3xl p-12 mx-4 lg:p-8 text-center flex flex-col space-y-1
                     hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center wow fadeInLeft">
                            <img src="/images/eas10.jpg" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">RELAX</h3>
                        <p className="max-w-lg">Sit back and await your package at your doorstep</p>
                    </div>
                </div>
            </Container>

            <div
                className="wow fadeInUp mt-28 pt-10 md:pt-28 pb-52 space-y-4 text-center text-white bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/images/banter.png')" }}
            >
                <h3 className="wow fadeInUp text-xl md:text-2xl text-green-400 font-bold">
                    Affordable. Great fit. No hassle.
                </h3>
                <h1 className="wow fadeInUp text-3xl md:text-4xl xl:text-6xl font-bold">
                    Fashion sense in <br className="lg:block" /> One Place
                </h1>
                <p className="wow fadeInleft text-white font-medium text-opacity-80 text-sm md:text-base"></p>
            </div>

            <Container className="-mt-[150px] wow fadeInUp">
                <div className="wow fadeInUp grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
                    <div
                        className=" wow fadeInLeft w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/our-solutions-icon-1.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Payments</h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Integrated online payment system to manage transaction and for easy
                            payment of order
                        </p>
                    </div>
                    <div
                        className=" wow fadeInLeft w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/banner-rocket.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Payments</h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Integrated online payment system to manage transaction and for easy
                            payment of order
                        </p>
                    </div>
                    <div
                        className=" wow fadeInLeft w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-4 shadow-xl"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-1.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Payments</h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Integrated online payment system to manage transaction and for easy
                            payment of order
                        </p>
                    </div>
                </div>
            </Container>
            <h1 className="text-center font-extrabold text-3xl my-12 text-indigo-800">
                <i>Testimony</i>
            </h1>
            <div className="wow bounceInLeft md:flex flex-row my-6 mx-5 bg-slate-100">
                <div className="max-sm:hidden my-5  ">
                    <MDBCard className="max-sm:hidden">
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image hover-overlay max-sm:hidden"
                        ></MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle className="font-thin text-center">
                                S <span className="font-black">"</span> atisfied with the service
                                provided by the company , wish this was in existed before i did my
                                wedding , the owanbe would have been dope.
                                <span className="font-black">"</span>
                            </MDBCardTitle>
                            <MDBCardText className="font-black">Mrs obadiah</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="my-5">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image hover-overlay max-sm:hidden"
                        ></MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle className="font-thin">
                                {" "}
                                <span className="font-black">"</span> Thanks for the creator of this
                                platform, my fashion sense and style has rapidly increase since
                                using this company for my family wadrobe change.AN app will be
                                better to make a good review.<span className="font-black">"</span>
                            </MDBCardTitle>
                            <MDBCardText className="font-black text-right">Mr peter</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="my-5">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image hover-overlay max-sm:hidden"
                        ></MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle className="font-thin">
                                {" "}
                                <span className="font-black">"</span> The owanbe for my wedding
                                change my perspective about the platform, The wedding dress and that
                                of my husband was done and completed before a week to the wedding.So
                                fast and Reliable.<span className="font-black">"</span>
                            </MDBCardTitle>
                            <MDBCardText className="font-black text-right">
                                Mr/Mrs oviah
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
            <Accordion />
            <Footer />
        </div>
    );
};

export default Home;
