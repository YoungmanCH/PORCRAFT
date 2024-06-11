import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "@aws-amplify/auth";

import UseAuth from "../services/auth/UseAuth";
import UseDatabase from "../services/database/UseDatabase";

const SignIn = () => {
  // username is email.
  const [username, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [getAuthenticatedUser] = UseAuth();
  const { fetchUserDatabase, createUserDatabase } = UseDatabase({});

  const navigate = useNavigate();

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn({
        username,
        password,
      });
      const user = await _handleToGetAuthenticatedUser();
      if (user == null) {
        console.log("State: User is not sign in.");
        return;
      }

      const userDatabase = await _handleFetchUserDatabase();
      if (userDatabase == null) {
        await _handleCreateUserDatabase(user);
      }

      _handleNavigate();
    } catch (error) {
      setMessage(`Error signing up:, ${error.message}`);
    }
  };

  const _handleToGetAuthenticatedUser = async () => {
    try {
      const user = await getAuthenticatedUser();
      return user;
    } catch (error) {
      console.log("Error: failed to get current user.", error);
      return null;
    }
  };

  const _handleFetchUserDatabase = async () => {
    try {
      return await fetchUserDatabase();
    } catch (error) {
      console.error("Error creating user database:", error);
    }
  };

  const _handleCreateUserDatabase = async (user) => {
    try {
      await createUserDatabase(user);
    } catch (error) {
      console.error("Error creating user database:", error);
    }
  };

  const _handleNavigate = () => {
    navigate("/mode");
  };

  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          backgroundImage: `url("assets/images/space-galaxy.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full">
          <div className="w-1/2 p-24 flex justify-center items-center">
            <p
              className="text-8xl font-sans"
              style={{
                background:
                  "linear-gradient(to right, lightGreen, #ebf8e1, #3f87a6, green)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Accelerate your life design with Porcraft.
            </p>
          </div>
          <div className="w-1/2 p-24 bg-gray-950 opacity-85 flex flex-col justify-center">
            <p className="font-sans text-zinc-100 text-4xl text-left mb-6">
              Welcome to a new adventure!
            </p>
            {message && <p className="text-zinc-300">{message}</p>}
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div className="text-left">
                <label htmlFor="email" className="block text-zinc-300 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@address.com"
                  className="bg-purple-950 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
                  onChange={handleSetEmail}
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="password"
                  className="block text-zinc-300 text-lg"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  className="bg-purple-950 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
                  onChange={handleSetPassword}
                />
              </div>
              <div className="text-left mt-4">
                <input
                  type="submit"
                  value="Sign in"
                  className="cursor-pointer hover:opacity-80 text-white w-3/4 my-6 py-2 px-4 rounded-md"
                  style={{
                    background: "linear-gradient(to right, #e66465, indigo)",
                  }}
                />
              </div>
              <div className="flex">
                <div className="text-zinc-300">Don&apos;t have an account?</div>
                <Link
                  to="/signUp"
                  className="text-purple-500 pl-2 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  Sign up→
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
