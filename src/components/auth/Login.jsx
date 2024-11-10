import { useState, useEffect } from "react";
import backdrop from "./../../assets/loginBackdrop.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);

            //getting additional info of user form DB
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                navigate("/home");
            } else {
                console.log(`user is not logged in`);
            }
        });
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`login Sucessful`);
            navigate("/home");
        } catch (err) {
            console.log(`error while login`, err);
        }
    }

    return (
        <div className="overflow-hidden h-screen">
            <div
                style={{
                    backgroundImage: `url(${backdrop})`,
                }}
                className="absolute h-screen w-screen brightness-[0.45]"
            ></div>
            <form
                onSubmit={handleLogin}
                className="absolute top-20 bottom-20 left-40 right-40 w-[30em] m-auto bg-black bg-opacity-70 p-20 flex flex-col gap-5"
            >
                <h3 className="text-white text-3xl font-bold">Login</h3>

                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                <button
                    type="submit"
                    className="bg-[#E50914] hover:bg-[#D50914] p-3 rounded-md font-semibold text-white mt-10"
                >
                    Login
                </button>
                <p className=" text-white mt-20">
                    Don&apos;t have Netflx account?
                    <Link to="/signup" className="font-semibold">
                        SingUp.
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login /*  */;
