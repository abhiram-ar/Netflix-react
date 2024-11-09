import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

export default function App() {
    const [nowPlayingMovieData, setData] = useState(null);
    const [popularMovieData, setPopularMovieData] = useState(null);
    const [topRatedMovieData, setTopRatedMovieData] = useState(null);
    const [upComingMovieData, setUpComingMovieData] = useState(null);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2I1YTNiYTYwM2E0YTNmOWI5ZDZhMGJjOTEyNWE5YiIsIm5iZiI6MTczMTA0MDA1NC41OTkyOTAxLCJzdWIiOiI2NzJkOTIxN2JlNzZiMDY0NGIzZGY0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nSyuKOosY6ayI2D8PH_c_E9xbftyV11Tuo7eLGs2l9A",
            },
        };

        fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`now playing data fetch sucessful`);
                setData(res);
            })
            .catch((err) => console.error(`nowplaying data fetch errro`, err));

        fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`popular data fetch complete`);
                setPopularMovieData(res);
            })
            .catch((err) =>
                console.error(`error while fetching pupular movie data`, err)
            );

        fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`top rated movie data fetching sucessful`);
                setTopRatedMovieData(res);
            })
            .catch((err) =>
                console.error(`error while fetching top rated movies`, err)
            );

        fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {console.log(`upcoming movie data fetch sucessful`)
                setUpComingMovieData(res)
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Navbar>navbar</Navbar>
            <Hero></Hero>
            {nowPlayingMovieData && popularMovieData && topRatedMovieData && upComingMovieData &&(
                <div className="bg-black mt-5">
                    <MovieList
                        sectionName="Now Playing"
                        movieData={nowPlayingMovieData.results}
                    ></MovieList>
                    <MovieList
                        sectionName="Popular"
                        movieData={popularMovieData.results}
                    ></MovieList>
                    <MovieList
                        sectionName="Top Rated"
                        movieData={topRatedMovieData.results}
                    ></MovieList>
                    <MovieList sectionName="Upcoming" movieData={upComingMovieData.results}></MovieList>
                    <Footer></Footer>
                </div>
            )}
        </>
    );
}
