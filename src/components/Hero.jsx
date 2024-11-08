import heroPoster from "./../assets/meygan.webp";
import heroTitle from "./../assets/headerMovieTitle.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Hero() {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${heroPoster})` }}
                className="relative bg-no-repeat bg-top h-screen bg-[length:110%_110%]"
            />
            <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/0" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/10" />
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
                            <PlayArrowIcon className="ml-[-15px]" sx={{ fontSize: 50 }} />
                            <span className="text-2xl font-bold">Play</span>
                        </button>
                        <button className="py-3 px-5 bg-slate-400 hover:opacity-80 bg-opacity-10 flex items-center gap-3 rounded-md">
                            <InfoOutlinedIcon sx={{ fontSize: 50 }} />
                            <span className="text-2xl font-bold">
                                More Info
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
