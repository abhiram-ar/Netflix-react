import MovieCard from "./MovieCard";
import movieList from "./../tempmovie";

function SearchResults({ movieData = movieList, type, query }) {
    return (
        <div className="relative py-20   bg-black min-h-screen">
            <div>
                <div className="mt-20 flex flex-wrap gap-10 justify-center items-center ">
                    {movieData?.map((movie) => {
                        return (
                            <div
                                className="relative w-18 h-[30em] hover:z-20"
                                key={movie.id}
                            >
                                <MovieCard
                                    movieDetails={movie}
                                    type={type}
                                    moviePoster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
