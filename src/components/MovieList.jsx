import MovieCard from "./MovieCard";
import movieList from "./../tempmovie";
import { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function MovieList() {
    const carosal = useRef(null);

    function hanldeLeftClick() {
        carosal.current.scrollLeft -= 1400;
    }

    function hanldeRightClick() {
        carosal.current.scrollLeft += 1400;
    }
    return (
        <div className="relative mt-[-8em]">
            <h2 className="ml-16 mb-[-2em] text-3xl font-bold text-white">
                Trending
            </h2>
            <div
                ref={carosal}
                className="pl-16 h-[27em] items-center scroll-smooth overflow-hidden"
            >
                <div className="inline-flex mt-20 flex-nowrap gap-3">
                    {movieList.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                movieDetails={movie}
                                moviePoster={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            />
                        );
                    })}
                </div>
            </div>
            <button
                className="absolute top-20 left-0 h-28 p-1 text-white  bg-black bg-opacity-10 hover:bg-opacity-50 opacity-0 hover:opacity-100 rounded-3xl z-30"
                onClick={hanldeLeftClick}
            >
                <ChevronLeftIcon fontSize="large" />
            </button>
            <button
                onClick={hanldeRightClick}
                className="absolute top-20 right-0 h-28 p-1 text-white bg-black bg-opacity-10 hover:bg-opacity-50 opacity-0 hover:opacity-100 rounded-3xl z-30"
            >
                <ChevronRightIcon fontSize="large" />
            </button>
        </div>
    );
}

export default MovieList;
