import SmallTitle from "@/lib/pagecomponents/custom/smalltitle";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import firebase_app from "@/lib/firebase/init";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const auth = getAuth(firebase_app);


function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credential =  await signInWithEmailAndPassword(auth, email, password);


      setEmail("");
      setPassword("");
       Cookies.set("token", await credential.user.getIdToken(), {expires:365})
      alert("Successfully logined");
      router.replace("/");
    } catch (error) {
      alert("Error: " + error["message"]);
    }

    // handle form submission logic here
  };
  return (
    <div className="p-2">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-4xl mx-auto my-6"
      >
        <SmallTitle>Login</SmallTitle>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md form-input border-blue-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md form-input border-blue-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
        <p className="text-center">Or, You&apos;re a new User🤔</p>
        <Link
          href="/signup"
          className="text-center block hover:scale-110 transition-all"
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
}
export default Login;