import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmSignUp } from "@aws-amplify/auth";

const ConfirmSignUp = () => {
  // username is email.
  const [username, setEmail] = useState("");
  const [confirmationCode, setCode] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetCode = (e) => {
    setCode(e.target.value);
  };

  const handleConfirmSignUp = async (e) => {
    e.preventDefault();
    try {
      await confirmSignUp({ username, confirmationCode });
      _handleNavigate();
    } catch (error) {
      setMessage(`Error confirming sign up: ${error.message}`);
    }
  };

  const _handleNavigate = () => {
    navigate("/signIn");
  };

  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          backgroundImage: `url("assets/images/astronaut.jpg")`,
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
                  "linear-gradient(to right, #fde047, #f59e0b, #ea580c, #991b1b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Confirm your account with Porcraft.
            </p>
          </div>
          <div className="w-1/2 p-24 bg-gray-950 opacity-85 flex flex-col justify-center">
            <p className="font-sans text-zinc-100 text-4xl text-left mb-6">
              Enter the confirmation code
            </p>
            {message && <p className="text-zinc-300">{message}</p>}
            <form className="space-y-6" onSubmit={handleConfirmSignUp}>
              <div className="text-left">
                <label htmlFor="email" className="block text-zinc-300 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="your email"
                  className="bg-red-700 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
                  onChange={handleSetEmail}
                />
              </div>
              <div className="text-left">
                <label htmlFor="code" className="block text-zinc-300 text-lg">
                  Confirmation Code
                </label>
                <input
                  id="code"
                  type="text"
                  placeholder="enter your confirmation code"
                  className="bg-red-700 text-zinc-300 mt-1 w-3/4 p-2 rounded-md"
                  onChange={handleSetCode}
                />
              </div>
              <div className="text-left mt-4">
                <input
                  type="submit"
                  value="Confirm Sign Up"
                  className="cursor-pointer hover:opacity-80 text-white w-3/4 my-6 py-2 px-4 rounded-md"
                  style={{
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmSignUp;
