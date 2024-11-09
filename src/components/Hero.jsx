import heroPoster from "./../assets/meygan.webp";
import heroTitle from "./../assets/headerMovieTitle.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function Hero() {
    const [ismodalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div
                style={{ backgroundImage: `url(${heroPoster})` }}
                className="relative bg-no-repeat bg-top h-screen bg-[length:100%_100%]"
            />
            <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/0" />
            <div className="absolute inset-0 bg-gradient-to-b from-1% from-black/70 via-15% via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute inset-x-16 inset-y-28">
                <div className="w-2/5">
                    <img src={heroTitle} alt="hero title" />

                    <h3 className="text-white text-4xl font-semibold mt-5">
                        #2 in Movies Today
                    </h3>
                    <br />
                    <p className="text-white text-2xl">
                        A man makes a bittersweet journey back to his hometown
                        after 22 years and meets an insistent yet kindhearted
                        relative whose name he can&apos;t remember.
                    </p>

                    <div className=" mt-10 text-white flex gap-5">
                        <button className="py-3 px-10 bg-white hover:opacity-80 text-black flex items-center gap-3 rounded-md">
                            <PlayArrowIcon
                                className="ml-[-15px]"
                                sx={{ fontSize: 50 }}
                            />
                            <span className="text-2xl font-bold">Play</span>
                        </button>
                        <button
                            onClick={() => {setModalOpen(true)
                                document.body.style.overflow = 'hidden';
                            }}
                            className="py-3 px-5 bg-slate-400 hover:opacity-80 bg-opacity-10 flex items-center gap-3 rounded-md"
                        >
                            <InfoOutlinedIcon sx={{ fontSize: 50 }} />
                            <span className="text-2xl font-bold">
                                More Info
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* modal BG */}

            {ismodalOpen && (
                <div className=" w-screen inset-0 fixed bg-black z-40 bg-opacity-80">
                    {/* modal */}
                    <div className="relative w-[50em] m-auto mt-20 rounded-2xl overflow-hidden shadow-2xl ">
                        <div className="relative h-96 w-full">
                            <button
                                onClick={() => {setModalOpen(false)
                                    document.body.style.overflowY = "scroll"
                                }}
                                className="absolute right-5 top-5 w-5 h-5 p-5 z-10 rounded-full flex justify-center items-center bg-zinc-800 text-white"
                            >
                                <CloseIcon />
                            </button>
                            <img
                                className="absolute w-full h-96"
                                src={heroPoster}
                            ></img>
                            <div className="absolute inset-0 bg-gradient-to-b from-1% from-black/70 via-15% via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/0" />
                            <div className="absolute h-96 inset-0 bg-gradient-to-t from-[#181818]/100 via-transparent to-transparent" />
                            <h2 className="absolute bottom-10 left-10 text-white text-5xl">
                                Meiyazhagan
                            </h2>
                        </div>
                        {/* details */}
                        <div className=" text-white bg-[#181818] p-10">
                            <div className="flex">
                                <div className="w-2/3 pr-10">
                                    <p className="text-zinc-400 font-semibold">
                                        2024 2h 38m{" "}
                                        <span className="border h-fit px-1 text-[0.7em]">
                                            HD
                                        </span>
                                    </p>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Deleniti atque
                                        inventore amet, dolores quibusdam facere
                                        aliquid voluptate eligendi dolorum iusto
                                        aut impedit, vitae nisi harum delectus
                                        libero recusandae, a provident!
                                    </p>
                                </div>
                                <div>
                                    <p className="mt-6">
                                        <span className="font-semibold text-zinc-500">
                                            Genres:{" "}
                                        </span>
                                        Drama, Tamil
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-semibold text-zinc-500">
                                            Available in:{" "}
                                        </span>
                                        Tamil, malayalam
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* More like thi */}
                        <div></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Hero;
