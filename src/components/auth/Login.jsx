import { useState, useEffect } from "react";
import backdrop from "./../../assets/loginBackdrop.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { useForm } from "react-hook-form";

function Login() {
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            if (!user) setloading(false);

            const docRef = doc(db, "Users", user.uid);

            //getting additional info of user form DB
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setloading(false);
                navigate("/home");
            } else {
                setloading(false);
                console.log(`user is not logged in`);
            }
        });
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    async function handleLogin(data) {
        console.log(data)
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(`login Sucessful`);
            navigate("/home");
        } catch (err) {
            console.log(`error while login`, err);
        }
    }

    if (loading) return <LoadingSpinner />;

    return (
        <div className="overflow-hidden h-screen">
            <div
                style={{
                    backgroundImage: `url(${backdrop})`,
                }}
                className="absolute h-screen w-screen brightness-[0.45]"
            ></div>
            <form
                onSubmit={handleSubmit((data) => handleLogin(data))}
                className="absolute top-20 bottom-20 left-40 right-40 w-[30em] m-auto bg-black bg-opacity-70 p-20 flex flex-col gap-5"
            >
                <h3 className="text-white text-3xl font-bold">Login</h3>

                {/* login */}
                <input
                    {...register("email", {
                        required: true,
                        pattern:
                            // eslint-disable-next-line no-useless-escape
                            /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
                    })}
                    placeholder="email"
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                {errors.email?.type === "required" && (
                    <p className="text-red-500 text-sm">Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                    <p className="text-red-500 text-sm">Invalid Email</p>
                )}

                {/* password */}
                <input
                    type="password"
                    {...register("password", { required: true, minLength: 8 })}
                    placeholder="password"
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                {errors.password?.type === "required" && (
                    <p className="text-red-500 text-sm">
                        Password is required
                    </p>
                )}
                {errors.password?.type === "minLength" && (
                    <p className="text-red-500 text-sm">
                        Password must be atleast 8 characters long
                    </p>
                )}
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
