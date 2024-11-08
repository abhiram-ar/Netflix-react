import logo from "./../assets/netflix-logo.png";
import avatar from "./../assets/avatar.png";

function Navbar() {
    return (
        <div className="w-screen fixed flex justify-between bg-slate-500 py-5 px-16 ">
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

            <div className="flex items-center gap-5">
                <input placeholder="search" type="search" name="searchQuery" />
                <span>not</span>
                <div>
                    <img src={avatar} alt="userProfilePic" />

                    <div className="hidden">
                        <ul>
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
                        <a href="#">Sign out of Netflix</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
