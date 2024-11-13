import logo from "./../assets/netflix-logo.png";
import avatar from "./../assets/avatar.png";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar({ userDetails, searchContext }) {
    const [dropDown, setDropDown] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();

    //searchstates
    const [
        searchQuery,
        setSearchQuery,
        showSearchResults,
        setShowSearchResults,
        searchResults,
        setSearchResults,
    ] = searchContext;

    // nav bg when scrolled down
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    async function handleSignOut() {
        try {
            await auth.signOut();
            console.log(`signout sucessful`);
            navigate("/login");
        } catch (err) {
            console.log(`error while loging out`, err);
        }
    }

    const fetchSearchResult = (query)=>{
        console.log(`search called`);
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2I1YTNiYTYwM2E0YTNmOWI5ZDZhMGJjOTEyNWE5YiIsIm5iZiI6MTczMTUxMDQzMi43OTA5MTQ1LCJzdWIiOiI2NzJkOTIxN2JlNzZiMDY0NGIzZGY0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ju6A51OZeiu5rE-emJ2cW-8Fv4U3tX1MhGOP97-Zt04",
            },
        };

        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(`search data fetched`, res)
                setSearchResults(res.results);
                setShowSearchResults(true)
            })
            .catch((err) => console.error(err));

    }
    
    console.log(searchQuery);
    return (
        <div
            className={`w-screen fixed ${
                scrollPosition > 80 ? "bg-black" : ""
            } flex justify-between z-30 py-5 px-16 transition-colors ease-in-out <delay-0></delay-0> duration-300  `}
        >
            <div className="flex gap-10 justify-center items-center]">
                <img src={logo} className="h-8" />
                <ul className="flex gap-5 items-center font-semibold text-white">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My list</li>
                    <li>Browse By language</li>
                </ul>
            </div>

            <div className="flex justify-between items-center  ">
                <div className="bg-zinc-200 flex justify-center rounded-md items-center gap-1 ps-5 pe-2 py-1 mr-2">
                    <input
                        placeholder="search"
                        autoFocus="autoFocus"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className=" w-full outline-none bg-zinc-200"
                    />
                    <button onClick={()=>{
                        if (searchQuery === "") return
                        fetchSearchResult(searchQuery)
                    }}>
                        <SearchOutlinedIcon />
                    </button>
                </div>
                <span className="text-white font-semibold">
                    {userDetails?.username || "loading..."}
                </span>
                <div
                    className="relative"
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                >
                    <img
                        className="rounded-sm"
                        src={avatar}
                        alt="userProfilePic"
                    />

                    <div
                        className={`${
                            dropDown ? "visible" : "hidden"
                        } absolute top-8 -right-5 text-white w-48 bg-black bg-opacity-95  rounded-sm `}
                    >
                        <ul className="flex flex-col gap-3 p-5">
                            <li>
                                <a href="#">Manange profiles</a>
                            </li>
                            <li>
                                <a href="#">Transfer Profile</a>
                            </li>
                            <li>
                                <a href="#"></a>Account
                            </li>
                            <li>
                                <a href="#"></a>Help Center
                            </li>
                        </ul>
                        <hr className="" />
                        <button className="p-5" onClick={handleSignOut}>
                            Sign out of Netflix
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
