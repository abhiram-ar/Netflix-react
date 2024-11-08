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
        <div className="relative mb-16">
          <h2 className="ml-16 mb-2 text-3xl font-bold text-white">Trending</h2>
            <div ref={carosal} className="ml-16 overflow-hidden scroll-smooth">
                <div className="inline-flex flex-nowrap gap-2">
                    {movieList.map((movie) => {
                        return (
                            <MovieCard
                                className=""
                                key={movie.id}
                                moviePoster={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            />
                        );
                    })}
                </div>
            </div>
            <button
                className="absolute top-20 left-0 h-28 p-1 text-white  bg-black bg-opacity-10 hover:bg-opacity-50 opacity-0 hover:opacity-100 rounded-3xl"
                onClick={hanldeLeftClick}
            >
                <ChevronLeftIcon fontSize="large" />
            </button>
            <button
                onClick={hanldeRightClick}
                className="absolute top-20 right-0 h-28 p-1 text-white bg-black bg-opacity-10 hover:bg-opacity-50 opacity-0 hover:opacity-100 rounded-3xl"
            >
                <ChevronRightIcon fontSize="large" />
            </button>
        </div>
    );
}

export default MovieList;
