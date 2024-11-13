import MovieCard from "./MovieCard";
import movieList from "./../tempmovie";

function SearchResults({ movieData = movieList, type, query }) {
    return (
        <div className="relative py-20   bg-black min-h-screen">
            <div>
                <div className="mt-20 flex flex-wrap gap-10 justify-start items-center px-24">
                    {movieData.length === 0 ? (
                        <div className="text-white text-2xl flex flex-col w-full h-44 justify-center items-center">
                            <p>:( No Movies Found</p>
                            <p>Try another Search</p>
                        </div>
                    ) : (
                        movieData?.map((movie) => {
                            return (
                                <div
                                    className="relative -mb-10 h-[30em] hover:z-20"
                                    key={movie.id}
                                >
                                    <MovieCard
                                        width="w-[15rem]"
                                        movieDetails={movie}
                                        type={type}
                                        moviePoster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
