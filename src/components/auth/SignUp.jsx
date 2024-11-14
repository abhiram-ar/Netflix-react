import { useState } from "react";
import backdrop from "./../../assets/loginBackdrop.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    async function handleSingUp(data) {
        console.log(data);
        try {
            await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            const user = auth.currentUser;
            console.log(`user created sucessfully`);
            console.log(user);

            if (user) {
                setDoc(doc(db, "Users", user.uid), {
                    email,
                    username: data.username,
                }).then(() => navigate("/login"))
            }
        } catch (err) {
            console.log(`error while creating the user`, err);
            alert("error while creating user")
        } finally{
            reset()
        }
    }
    return (
        <div className="overflow-hidden">
            <div
                style={{
                    backgroundImage: `url(${backdrop})`,
                }}
                className="absolute h-screen w-screen brightness-[0.45]"
            ></div>
            <form
                onSubmit={handleSubmit((data) => handleSingUp(data))}
                className="absolute top-20 bottom-20 left-40 right-40 w-[30em] m-auto bg-black bg-opacity-70 p-20 flex flex-col gap-5"
            >
                <h3 className="text-white text-3xl font-bold">Sign In</h3>
                <input
                    type="text"
                    {...register("username", { required: true, minLength: 3 })}
                    placeholder="Username"
                    className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                />
                {errors.username?.type === "required" && (
                    <p className="text-red-500 text-sm">username is required</p>
                )}
                {errors.username?.type === "minLength" && (
                    <p className="text-red-500 text-sm">
                        Username must be atleast 3 characters long.
                    </p>
                )}

                {/* email */}
                <input
                    {...register("email", {
                        required: true,
                        pattern:
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
                    <p className="text-red-500 text-sm">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                    <p className="text-red-500 text-sm">
                        Password must be atleast 8 characters long
                    </p>
                )}
                <button
                    type="submit"
                    className="bg-[#E50914] hover:bg-[#D50914] p-3 rounded-md font-semibold text-white "
                >
                    Sign Up
                </button>
                <p className="text-white mt-20">
                    Has a Netflx account?{" "}
                    <Link to="/login" className="font-semibold">
                        Login.
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
