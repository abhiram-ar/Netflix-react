import Footer from "../Footer";
import netflixLogo from "./../../assets/netflix-logo.png";
import MovieGrid from "./../../assets/langingroll.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="">
            <div className="relative h-screen overflow-x-hidden bg-black">
                <img
                    className="absolute w-[150em] h-screen -z-0"
                    src={MovieGrid}
                    alt=""
                />
                <div className="absolute w-screen h-32 bg-gradient-to-b from-black to-transparent"></div>
                <div className="absolute z-10 w-screen h-[70em] backdrop-blur-xl">
                    <nav className="flex px-12 py-8 justify-between items-center">
                        <img className="max-h-10" src={netflixLogo} />
                        <div className="flex gap-5">
                            <select
                                style={{ appearance: "none" }}
                                className="py-0 px-6 h-8 rounded-3xl bg-zinc-800 border border-zinc-200 text-white box-border"
                                id=""
                            >
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <button className="py-0 px-4 h-8 rounded-full bg-white font-semibold">
                                <Link to="/login">Sign In</Link>
                            </button>
                        </div>
                    </nav>

                    <header className="relative w-screen text-white  px-16">
                        <div className="relative h-[25em] overflow-hidden rounded-2xl border-2 border-zinc-400/30">
                            <img
                                className="w-full m-auto brightness-[0.4] "
                                src={MovieGrid}
                                alt=""
                            />
                            <div className=" absolute h-[5em] bottom-0 w-full bg-gradient-to-t from-amber-100/30 to-transparent z-10"></div>
                        </div>
                        <div className="absolute inset-x-0 top-16 m-auto flex flex-col justify-center items-center text-center">
                            <h1 className="relative text-4xl font-bold">
                                Endless entertainment starts here.
                                <br /> Plans from $129
                            </h1>
                            <p className="relative text-gray-400 mt-2 text-xl">
                                Cancel or switch plans at anytime.
                            </p>
                        </div>
                        <div className="absolute h-56 font-[inter] inset-x-0 -bottom-10 flex gap-2 justify-center items-center z-20">
                            <div className=" h-full w-80 bg-gradient-to-br from-blue-900 to-black px-5 pt-8 pb-5 rounded-2xl border border-zinc-400/60">
                                <h3 className="font-semibold text-xl">
                                    Mobile
                                </h3>
                                <h4 className="font-semibold text-lg py-1 text-gray-400">
                                    480p
                                </h4>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ Fair video quality
                                </p>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ For your phone or tablet
                                </p>
                                <h4 className="absolute bottom-3 font-semibold text-lg text-gray-400 mt-8">
                                    $149/mo
                                </h4>
                            </div>

                            <div className="relative h-full w-80 bg-gradient-to-br from-blue-800 to-black px-5 pt-8 pb-5 overflow-hidden rounded-2xl border border-zinc-400/60">
                                <span className="absolute top-0 right-0 text-white font-semibold text-sm bg-gray-600 px-2 py-1 rounded-bl-md  ">
                                    Most Popular
                                </span>
                                <h3 className="font-semibold text-xl">Basic</h3>
                                <h4 className="font-semibold text-lg py-1 text-gray-400">
                                    720p
                                </h4>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ Good video quality
                                </p>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ For your phone, tablet, laptop and TV
                                </p>
                                <h4 className="absolute bottom-3 font-semibold text-lg text-gray-400 mt-3">
                                    $199/mo
                                </h4>
                            </div>

                            <div className="font-[inter] h-full w-80 bg-gradient-to-br from-purple-800 to-black px-5 pt-8 pb-5 rounded-2xl border border-zinc-400/60">
                                <h3 className="font-semibold text-xl">
                                    Standard
                                </h3>
                                <h4 className="font-semibold text-lg py-1 text-gray-400">
                                    1080p
                                </h4>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ Great video quality
                                </p>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ For your phone, tablet, laptop and TV
                                </p>
                                <h4 className="absolute bottom-3 font-semibold text-lg text-gray-400 mt-3">
                                    $499/mo
                                </h4>
                            </div>

                            <div className="font-[inter] h-full w-80 bg-gradient-to-br from-violet-800 to-black px-5 pt-8 pb-5 rounded-2xl border border-zinc-400/60">
                                <h3 className="font-semibold text-xl">
                                    Premium
                                </h3>
                                <h4 className="font-semibold text-lg py-1 text-gray-400">
                                    4K + HDR
                                </h4>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ Best video quality
                                </p>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ Immersive sound (spacial audio)
                                </p>
                                <p className="text-gray-400 text-sm py-1">
                                    ✓ For your phone or tablet
                                </p>
                                <h4 className="absolute bottom-3 font-semibold text-lg text-gray-400 mt-3">
                                    $149/mo
                                </h4>
                            </div>
                        </div>
                    </header>
                    <div className="mt-20 flex m-auto justify-center items-center gap-2">
                        <input
                            type="email"
                            placeholder="email address"
                            className="bg-zinc-800  rounded-full border-2 border-zinc-400/30 h-16 w-80 px-10 text-white"
                        />
                        <Link to="/login">
                            <button className=" bg-[#E50914] text-2xl font-semibold text-white  rounded-full border-2 border-zinc-400/30 h-16 px-10">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    <div className="z-10 mt-44">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
