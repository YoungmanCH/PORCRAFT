import { useState } from "react";
import { Link } from "react-router-dom";

// import { Auth } from "aws-amplify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          backgroundImage: `url("assets/images/planet-earth-background.jpg")`,
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
                  "linear-gradient(to right, white, #ebf8e1, #3f87a6, blue)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Enhance your life design with Porcraft.
            </p>
          </div>
          <div className="w-1/2 p-24 bg-gray-950 opacity-85 flex flex-col justify-center">
            <p className="font-sans text-zinc-100 text-4xl text-left mb-6">
              Create an account
            </p>
            <form className="space-y-6">
              <div className="text-left">
                <label htmlFor="name" className="block text-zinc-300 text-lg">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="your name"
                  className="bg-blue-950 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
                  onChange={handleSetUsername}
                />
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-zinc-300 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@address.com"
                  className="bg-blue-950 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
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
                  className="bg-blue-950 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
                  onChange={handleSetPassword}
                />
              </div>
              <div className="text-left mt-4">
                <input
                  type="submit"
                  value="Create account"
                  className="cursor-pointer hover:opacity-80 text-white w-3/4 my-6 py-2 px-4 rounded-md"
                  style={{
                    background: "linear-gradient(to right, #3f87a6, blue)",
                  }}
                  onClick={handleSignUp}
                />
              </div>
              <div className="flex">
                <div className="text-zinc-300">Already a member?</div>
                <Link
                  to="/signIn"
                  className="text-blue-500 pl-2 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  Sign in→
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
