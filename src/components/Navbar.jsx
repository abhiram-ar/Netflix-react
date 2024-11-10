import logo from "./../assets/netflix-logo.png";
import avatar from "./../assets/avatar.png";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Navbar({userDetails}) {
    const [dropDown, setDropDown] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate()
    
    
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
    
    async function handleSignOut(){
        try{

            await auth.signOut()
            console.log(`signout sucessful`);
            navigate("/login")
        }catch(err){
            console.log(`error while loggin out`);
        }
    }

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

            <div className=" flex items-center gap-5">
                <input placeholder="search" type="search" name="searchQuery" />

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
