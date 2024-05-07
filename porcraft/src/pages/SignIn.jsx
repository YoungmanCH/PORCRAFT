import { Link } from "react-router-dom";

const SignIn = () => {
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
            <form className="space-y-6">
              <div className="text-left">
                <label htmlFor="email" className="block text-zinc-300 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@address.com"
                  className="bg-purple-950 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
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
