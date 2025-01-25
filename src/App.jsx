import { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchResults from "./components/SearchResults";

export default function App() {
    const [nowPlayingMovieData, setNowPlayingData] = useState();
    const [popularMovieData, setPopularMovieData] = useState();
    const [topRatedMovieData, setTopRatedMovieData] = useState();
    const [upComingMovieData, setUpComingMovieData] = useState();

    const [airingTodaySeriesData, setAiringTodaySeriesData] = useState();
    const [poppularSeriesData, setPopularSeriesData] = useState();
    const [topRatedSeriesData, setTopRatedSeriesData] = useState();

    const [userDetails, setUserDetails] = useState(null);
    const [loading, setloading] = useState(true);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [showSearchResults, setShowSearchResults] = useState(false);

    // early redirect
    const navigate = useNavigate();

    const CurrentUserContext = createContext("");

    const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "Users", user.uid);
            //getting additional info of user form DB
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(`docsnap data : `, docSnap.data());
                setloading(false);
            } else {
                console.log(`user is not logged in`);
                setloading(false);
                navigate("/login");
            }
        });
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    // movies data fetching
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
                setNowPlayingData(res);
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
            .then((res) => {
                console.log(`upcoming movie data fetch sucessful`);
                setUpComingMovieData(res);
            })
            .catch((err) => console.error(err));
    }, []);

    // TV series Data Fetching
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
            "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`airing today data fetch sucessful`);
                setAiringTodaySeriesData(res);
            })
            .catch((err) =>
                console.error(`error while fetching airing today data`, err)
            );

        fetch(
            "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`popular series data fetch sucessful`);
                setPopularSeriesData(res);
            })
            .catch((err) =>
                console.error(`error while fetching popular series data`, err)
            );

        fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`top rated series data fetch sucessful`);
                setTopRatedSeriesData(res);
            })
            .catch((err) =>
                console.error(
                    `erroor while fetching top rateed series data`,
                    err
                )
            );
    }, []);

    return (
        <div>
            <CurrentUserContext.Provider value={userDetails}>
                <Navbar
                    userDetails={userDetails}
                    searchContext={[
                        searchQuery,
                        setSearchQuery,
                        showSearchResults,
                        setShowSearchResults,
                        searchResults,
                        setSearchResults,
                    ]}
                >
                    navbar
                </Navbar>

                {showSearchResults ? (
                    <SearchResults movieData={searchResults} />
                ) : (
                    <>
                        <Hero></Hero>

                        <div className="bg-black mt-5">
                            {nowPlayingMovieData && (
                                <MovieList
                                    sectionName="Now Playing"
                                    movieData={nowPlayingMovieData?.results}
                                />
                            )}
                            {popularMovieData && (
                                <MovieList
                                    sectionName="Popular Movies"
                                    movieData={popularMovieData?.results}
                                />
                            )}
                            {topRatedMovieData && (
                                <MovieList
                                    sectionName="Top Rated Movies"
                                    movieData={topRatedMovieData?.results}
                                />
                            )}
                            {upComingMovieData && (
                                <MovieList
                                    sectionName="Upcoming Movies"
                                    movieData={upComingMovieData?.results}
                                />
                            )}

                            {/* series  */}
                            {airingTodaySeriesData && (
                                <MovieList
                                    sectionName="TV series Airing Today"
                                    movieData={airingTodaySeriesData?.results}
                                    type="series"
                                />
                            )}
                            {poppularSeriesData && (
                                <MovieList
                                    sectionName="Popular TV Series"
                                    movieData={poppularSeriesData?.results}
                                    type="series"
                                />
                            )}

                            {topRatedMovieData && (
                                <MovieList
                                    sectionName="Top Rated Series"
                                    movieData={topRatedSeriesData?.results}
                                    type="series"
                                />
                            )}
                            <Footer></Footer>
                        </div>
                    </>
                )}
            </CurrentUserContext.Provider>
        </div>
    );
}
