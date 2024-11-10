import CloseIcon from "@mui/icons-material/Close";
import { tempMovieData } from "../searchDetail";
import { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MovieDetailsModal({
    poster,
    setModalOpen,
    movieDetails,
    type = "movie",
}) {
    const [movieData, setMovieData] = useState(null);
    const navigate = useNavigate();
    //const movieData = tempMovieData

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2I1YTNiYTYwM2E0YTNmOWI5ZDZhMGJjOTEyNWE5YiIsIm5iZiI6MTczMTA0MDA1NC41OTkyOTAxLCJzdWIiOiI2NzJkOTIxN2JlNzZiMDY0NGIzZGY0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nSyuKOosY6ayI2D8PH_c_E9xbftyV11Tuo7eLGs2l9A",
            },
        };

        let url =
            type === "movie"
                ? `https://api.themoviedb.org/3/movie/${movieDetails.id}?language=en-US`
                : `https://api.themoviedb.org/3/tv/${movieDetails.id}?language=en-US`;

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setMovieData(res);
                console.log(`fething data of specific movie is sucessful`);
                console.log(res);
            })
            .catch((err) =>
                console.error(`error while fetching dat of specific movie`, err)
            );
    }, []);

    return (
        <div className=" w-screen inset-0 fixed bg-black z-40 bg-opacity-80">
            {/* modal */}
            <div className="animate-jump-in relative w-[45em] m-auto mt-16 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300">
                {/* modal header */}
                <div className="relative h-96 w-full">
                    <button
                        onClick={() => {
                            setModalOpen(false);
                            document.body.style.overflowY = "unset";
                        }}
                        className="absolute right-5 top-5 w-5 h-5 p-5 z-10 rounded-full flex justify-center items-center bg-zinc-800 text-white"
                    >
                        <CloseIcon />
                    </button>
                    <img className="absolute w-full h-96" src={poster}></img>
                    <div className="absolute inset-0 bg-gradient-to-b from-1% from-black/70 via-15% via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/0" />
                    <div className="absolute h-96 inset-0 bg-gradient-to-t from-[#181818]/100 via-transparent to-transparent" />
                    <div className="absolute bottom-[-1em] left-10">
                        <h2 className=" text-white text-5xl font-bold">
                            {movieDetails.title ||
                                movieDetails.name ||
                                movieData.title}
                        </h2>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() => {
                                    
                                    navigate(`/watch/${movieData.id}`);
                                    document.body.style.overflowY = "unset";
                                }}
                                className="py-1 px-6  bg-white hover:opacity-80 text-black flex items-center gap-3 rounded-md"
                            >
                                <PlayArrowIcon
                                    className="ml-[-15px]"
                                    sx={{ fontSize: 45 }}
                                />
                                <span className="text-xl font-bold">Play</span>
                            </button>
                            <button className="h-5 w-5 flex justify-center p-6 items-center bg-[#232323] border-2 border-[#979797] rounded-full text-white">
                                <AddOutlinedIcon sx={{ fontSize: 35 }} />
                            </button>
                            <button className="h-5 w-5 flex justify-center p-6 items-center bg-[#232323] border-2 border-[#979797] rounded-full text-white">
                                <ThumbUpOutlinedIcon sx={{ fontSize: 25 }} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* details */}
                <div className=" text-white bg-[#181818] px-10 py-12">
                    <div className="flex">
                        <div className="w-2/3 pr-10">
                            <p className="text-zinc-400 font-semibold">
                                {movieData
                                    ? movieData.release_date?.split("-")[0] ||
                                      movieData.first_air_date.split("-")[0]
                                    : "loading..."}

                                {movieData && type === "movie"
                                    ? ` ${Math.floor(
                                          movieData.runtime / 60
                                      )}hr ${movieData.runtime % 60}min `
                                    : movieData && type === "series"
                                    ? ` • Episodes: ${
                                          movieData.episode_run_time[0] ||
                                          "not available"
                                      } • `
                                    : "laading..."}
                                <span className="border h-fit px-1 text-[0.7em]">
                                    HD
                                </span>
                            </p>
                            <p className="mt-2">
                                {movieData ? movieData.overview : "loading..."}
                            </p>
                        </div>
                        <div>
                            <p className="mt-6">
                                <span className="font-semibold text-zinc-500">
                                    Genres:{" "}
                                </span>
                                {movieData
                                    ? movieData.genres
                                          .map((genre) => genre.name)
                                          .join(", ")
                                    : "loading"}
                            </p>
                            <p className="mt-2">
                                <span className="font-semibold text-zinc-500">
                                    Available in:{" "}
                                </span>
                                {movieData
                                    ? movieData.spoken_languages
                                          .map((language) => language.name)
                                          .join(", ")
                                    : "loading"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* More like this*/}
                <div></div>
            </div>
        </div>
    );
}

export default MovieDetailsModal;
