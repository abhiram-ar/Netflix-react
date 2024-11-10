import backdrop from "./../../assets/loginBackdrop.jpg";

function SignUp() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${backdrop})`, backgroundSize: "110%", backgroundPosition: "center"
                }}
                className="h-screen w-screen brightness-[0.45]  overflow-hidden"
            ></div>
            <div className="absolute top-20 bottom-20 left-40 right-40 w-[30em] m-auto bg-black bg-opacity-70 p-20 flex flex-col gap-5">
                <h3 className="text-white text-3xl font-bold">Sign In</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                <button type="submit" className="bg-[#E50914] hover:bg-[#D50914] p-3 rounded-md font-semibold text-white ">
                    Sign Up
                </button>
                <p className="text-white mt-20">
                    Has a Netflx account?{" "}
                    <a href="#" className="font-semibold">
                        Login.
                    </a>
                </p>
            </div>
        </>
    );
}

export default SignUp;
