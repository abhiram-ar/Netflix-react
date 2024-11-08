import MovieCard from "./MovieCard";
import moviePoster from "./../assets/meygan.webp";
import movieList from "./../tempmovie";
import { useRef } from "react";

function MovieList() {
    const carosal = useRef(null);

    function hanldeLeftClick() {
        carosal.current.scrollLeft -= 600;
    }

    function hanldeRightClick() {
        carosal.current.scrollLeft += 600;
    }
    return (
        <div className="realative">
            <div ref={carosal} className="overflow-hidden scroll-smooth">
                <div className="relative inline-flex flex-nowrap gap-2">
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
                <button onClick={hanldeLeftClick}>click me</button>
                <button onClick={hanldeRightClick}>click me</button>
        </div>
    );
}

export default MovieList;
