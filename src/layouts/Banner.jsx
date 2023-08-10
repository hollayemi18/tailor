import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="w-full overflow-hidden bg-[#f2f3f9] wow fadeInUp">
            <div
                className="relative bg-auto bg-no-repeat bg-[top_120px_right] md:bg-[top_150px_right] -mt-16 lg:bg-[top_10px_right]"
                style={{ backgroundImage: "url('/images/homepage1.png')" }}
            >
                <div>
                    <img
                        className="w-[25%] lg:w-[20%] xl:max-w-full h-auto align-middle absolute left-0 bottom-[5%] animate-ripple2"
                        src="/images/homepage3.jpg"
                        alt=""
                    />
                    <img
                        className="md:block w-[25%] lg:w-[15%] mt-16 xl:w-[19%] h-auto align-middle absolute top-0 left-0"
                        src="/images/banner-clock.png"
                        alt=""
                    />
                    <img
                        className="w-[30%] mb-10 xl:w-[13%] h-auto align-middle absolute left-[calc(48%)] bottom-[12%] animate-ripple2"
                        src="/images/banner-rocket.png"
                        alt=""
                    />
                
                </div>

                <div className="pt-[120px] pb-[300px] justify-center text-center lg:mt-24">
                    <div className="pt-5 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0 lg:justify-between relative z-10">
                        <img
                            src="/images/"
                            className="hidden lg:block lg:w-[11%] absolute top-[3%] left-[47%] xl:left-[54%] animate-ripple"
                            alt=""
                        />
                        <div>
                        
                            <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold text-indigo-900">
                                Fashion,
                                <br /> Great Fit,At Your <span className="text-green-700">Doorstep</span>
                            </h1>
                            <div className="flex items-center ml-32 mt-32 lg: space-x-24 ">
                                
                                    <Link
                                        to="/register"
                                        className="truncate transition-all duration-300 px-3 px-4 xl:px-8 font-medium py-3
                                         bg-indigo-600 text-white rounded-md focus:outline-none 
                                         hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50 lg:text-lg "
                                    >
                                        Sign Up
                                    </Link>
                                

                                <Link
                                    to="/explore"
                                    className="md:text-lg truncate transition-all duration-300 px-3 px-4 xl:px-8
                                     font-medium py-3 text-indigo-900 border border-indigo-900 rounded-md focus:outline-none hover:text-white
                                     hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
