import { useState } from "react";
import backdrop from "./../../assets/loginBackdrop.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSingUp(e){
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log(`user created sucessfully`);
            console.log(user);

            if(user){
                setDoc(doc(db,"Users",user.uid), {email,username})
            }

        }catch(err){
            console.log(`error while creating the user`, err);
        }
        

    }
    return (
        <div className="overflow-hidden">
            <div
                style={{
                    backgroundImage: `url(${backdrop})`
                }}
                className="absolute h-screen w-screen brightness-[0.45]"
            ></div>
            <form onSubmit={handleSingUp} className="absolute top-20 bottom-20 left-40 right-40 w-[30em] m-auto bg-black bg-opacity-70 p-20 flex flex-col gap-5">
                    <h3 className="text-white text-3xl font-bold">Sign In</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)}
                        className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                        className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                        className="bg-zinc-600 bg-opacity-20 py-4 px-4 rounded-sm border border-zinc-800 font-medium text-white"
                    />
                    <button
                        type="submit"
                        className="bg-[#E50914] hover:bg-[#D50914] p-3 rounded-md font-semibold text-white "
                    >
                        Sign Up
                    </button>
                <p className="text-white mt-20">
                    Has a Netflx account?{" "}
                    <a href="#" className="font-semibold">
                        Login.
                    </a>
                </p>
                </form>
        </div>
    );
}

export default SignUp;
