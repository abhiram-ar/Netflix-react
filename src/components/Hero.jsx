import heroPoster from "./../assets/meygan.webp";
import heroTitle from "./../assets/headerMovieTitle.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import movieList from "../tempmovie";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [ismodalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
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

                    <p className=" mt-4 text-white text-2xl">
                        A man makes a bittersweet journey back to his hometown
                        after 22 years and meets an insistent yet kindhearted
                        relative whose name he can&apos;t remember.
                    </p>

                    <div className=" mt-8 text-white flex gap-5">
                        <button
                            onClick={() => navigate("/watch/1136423")}
                            className="py-3 px-10 bg-white hover:opacity-80 text-black flex items-center gap-3 rounded-md"
                        >
                            <PlayArrowIcon
                                className="ml-[-15px]"
                                sx={{ fontSize: 50 }}
                            />
                            <span className="text-2xl font-bold">Play</span>
                        </button>
                        <button
                            onClick={() => {
                                setModalOpen(true);
                                document.body.style.overflow = "hidden";
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

            {ismodalOpen && (
                <MovieDetailsModal
                    poster={heroPoster}
                    movieDetails={{
                        backdrop_path: "/9v5Q5OOR9e83KBlK6SPQEcbm6Iw.jpg",
                        id: 1136423,
                        original_title: "மெய்யழகன்",
                        overview:
                            "Twenty-two years after losing his home, Arulmozhi Varman returns to his native Thanjavur to attend his cousin's wedding. Amidst the celebrations, Arul is reintroduced to an upbeat man whom he cannot recall. With the help of the unknown man, Arul reconnects with his past.",

                        poster_path: "/cB6qZSRgLqlABaOdtMtLAiK7C7j.jpg",
                        release_date: "2024-09-27",
                        runtime: 177,
                        spoken_languages: [
                            {
                                english_name: "Tamil",
                                iso_639_1: "ta",
                                name: "தமிழ்",
                            },
                        ],
                        tagline: "",
                        title: "Meiyazhagan",
                    }}
                    setModalOpen={setModalOpen}
                />
            )}
        </>
    );
}

export default Hero;
