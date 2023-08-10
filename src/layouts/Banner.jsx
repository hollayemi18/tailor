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
                        className="w-[25%] lg:w-[20%] md:max-w-full h-auto align-middle absolute left-0 bottom-[5%] animate-ripple2"
                        src="/images/homepage3.jpg"
                        alt=""
                    />
                    <img
                        className="md:block w-[25%] md:w-[15%] mt-16 xl:w-[19%] h-auto align-middle absolute top-0 left-0"
                        src="/images/banner-clock.png"
                        alt=""
                    />
                    <img
                        className="w-[30%] mb-10 md:w-[13%] h-auto align-middle absolute left-[calc(48%)] bottom-[12%] animate-ripple2"
                        src="/images/banner-rocket.png"
                        alt=""
                    />
                
                </div>

                <div className="pt-[120px] pb-[300px] justify-center text-center lg:mt-24">
                    <div className="pt-5 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0 lg:justify-between relative z-10">
                        <img
                            src="/images/"
                            className="block lg:w-[11%] absolute top-[3%] left-[47%] xl:left-[54%] animate-ripple"
                            alt=""
                        />
                        <div>
                        
                            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-indigo-900">
                                Fashion,
                                <br /> <i><span className="text-green-700 " >Great fit </span></i>,At Your <span className="text-green-700">Doorstep</span>
                            </h1>
                            <div className="flex flex-col  justify-center items-center md:flex-row  mt-20 ">
                                
                                    <Link
                                        to="/register"
                                        className="md:text-lg  transition-all duration-300 px-8
                                        font-extrabold py-3 text-white border border-indigo-900 rounded-md focus:outline-none hover:text-white
                                    bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                                    >
                                    Create A Free Account 

                                    </Link>
                

                                <Link  
                                    to="/explore"
                                    className="lg:mt-0 mx-12 font-extrabold md:text-lg mt-8
                                     truncate transition-all duration-300 px-8 
                                     font-extrabold py-3 text-indigo-900 border border-indigo-900 rounded-md focus:outline-none hover:text-white
                                     hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
                                >
                                    <i>Explore</i>
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
