/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

const IndexComponent: React.FC = () => {
    return (
        <main className="flex flex-col justify-between w-full h-full p-5 lg:px-60">
    <div className="w-full h-full md:h-4/5 text-white">
        <div className="w-full bg-green-900 rounded-2xl flex flex-col md:flex-row p-8 md:p-12 xl:p-16">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Many Services For You and Flexibility
                </h1>
                <p className="mt-3 text-sm md:text-base lg:text-lg">
                    Make all your work easier and faster with freelancer all over the world
                </p>
                <div className="relative mt-8 mb-8 w-full hidden md:flex">
                    <input
                        type="text"
                        placeholder="Meet Talence. bring you the change"
                        className="w-full h-10 pl-4 pr-10 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <div className="absolute right-3 bg-[#084008] rounded-full p-2">
                        <svg
                            width="15"
                            height="18"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.9141 18.2812C23.0859 16.4375 23.7734 14.25 23.7734 11.8984C23.7734 5.32813 18.4531 0 11.8906 0C5.32031 0 0 5.32813 0 11.8984C0 18.4688 5.32031 23.7969 11.8828 23.7969C14.2656 23.7969 16.4844 23.0938 18.3438 21.8906C18.6557 21.6736 19.0784 21.7112 19.3471 21.98L26.027 28.6598C26.7652 29.3981 27.9638 29.3928 28.6955 28.648C29.4179 27.9128 29.413 26.7327 28.6845 26.0036L22.0029 19.3159C21.7258 19.0385 21.6883 18.6019 21.9141 18.2812ZM18.5469 5.25C20.3203 7.02344 21.2969 9.38281 21.2969 11.8906C21.2969 14.3984 20.3203 16.7578 18.5469 18.5312C16.7734 20.3047 14.4141 21.2812 11.9062 21.2812C9.39844 21.2812 7.03906 20.3047 5.26562 18.5312C3.49219 16.7578 2.51562 14.3984 2.51562 11.8906C2.51562 9.38281 3.49219 7.02344 5.26562 5.25C7.03906 3.47656 9.39844 2.5 11.9062 2.5C14.4141 2.5 16.7734 3.47656 18.5469 5.25Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>



            {/* Container BarSlide */}
            <div className="w-full ">
                <div className="w-full">
                    <div className="w-20 h-20 bg-black ">

                    </div>
                </div>
            </div>


            {/* Container utama dengan scroll horizontal
            <div className="flex overflow-x-auto w-full mt-5 pb-5 relative whitespace-nowrap scrollbar-none">
                <div className="w-96 h-96 bg-white rounded-lg m-2 inline-block flex-none">
                    <Image className="w-full h-60" src={"/bannerRec.png"} alt="banner" width={800} height={800}></Image>
                </div>
                <div className="w-96 h-96 bg-white rounded-lg m-2 inline-block flex-none">
                    <Image className="w-full h-60" src={"/bannerRec2.png"} alt="banner" width={800} height={800}></Image>
                </div>
                <div className="w-96 h-96 bg-white rounded-lg m-2 inline-block flex-none">
                    <Image className="w-full h-60" src={"/bannerRec3.jpg"} alt="banner" width={800} height={800}></Image>
                </div>
                <div className="w-96 h-96 bg-white rounded-lg m-2 inline-block flex-none">
                    <Image className="w-full h-60" src={"/bannerRec4.jpg"} alt="banner" width={800} height={800}></Image>
                </div>
                <div className="w-96 h-96 bg-white rounded-lg m-2 inline-block flex-none">
                    <Image className="w-full h-60" src={"/bannerRec5.jpg"} alt="banner" width={800} height={800}></Image>
                </div>
            </div> */}
        </main>
    );
};

export default IndexComponent;