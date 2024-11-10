import Footer from "../Footer";
import netflixLogo from "./../../assets/netflix-logo.png";
import MovieGrid from "./../../assets/langingroll.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="">
            <div className="relative h-screen overflow-x-hidden bg-black">
                <img
                    className="absolute w-[250em] -z-0"
                    src={MovieGrid}
                    alt=""
                />
                <div className="absolute w-screen h-32 bg-gradient-to-b from-black to-transparent"></div>
                <div className="absolute z-10 w-screen h-[100em] backdrop-blur-2xl">
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
                        <div>

                        <h1 className="">
                            Endless entertainment starts here.
                            <br /> Plans from $129
                        </h1>
                        <p>Cancel or switch plans at anytime.</p>
                        </div>
                    </header>
                    <h2>Trending</h2>
                    <h2>Only on netflix</h2>
                    <h2>More Reason to Join</h2>
                    <h2>Frequently Asked Question</h2>
                    <div className="z-10">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
