import { useState } from "react";
import eyeNone from "../assets/icons/eye-none.svg";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [togglePassShow, setTogglePassShow] = useState(false);

  //   handle sign up
  const handleSignUp = () => {};
  return (
    <div className="grid gap-4">
      <form onSubmit={handleSignUp} className="grid gap-6">
        {/* email filed */}
        <label className="grid gap-4">
          <p className="text-base text-ft-black font-medium">Email</p>
          <input
            type="email"
            className="w-full p-5 focus-visible:outline-none border border-ft-gray-200 rounded-[10px] text-ft-gray-500"
            placeholder="Enter your email"
            required
          />
        </label>
        {/* passwprd filed */}
        <label className="grid gap-4">
          <p className="text-base text-ft-black font-medium">Password</p>
          <span className="w-full relative">
            <input
              type={togglePassShow ? "text" : "password"}
              className="w-full p-5 focus-visible:outline-none border border-ft-gray-200 rounded-[10px] text-ft-gray-500"
              placeholder="Enter your password"
              required
            />
            <img
              onClick={() => setTogglePassShow(!togglePassShow)}
              src={eyeNone}
              alt="eye"
              className="h-6 w-6 absolute top-5 right-5 cursor-pointer"
            />
          </span>
        </label>

        {/* remember me and forget pass */}
        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2.5 -mt-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded accent-ft-blue-400"
            />
            <p className="text-base text-ft-gray-500 font-normal">
              Remember me
            </p>
          </label>
          <p className="text-ft-blue-500 text-sm font-medium">
            Forget Password?
          </p>
        </div>
        {/* submit btn and navigate link */}
        <div className="w-full grid place-items-center gap-4">
          <button
            type="submit"
            className="w-[270px] h-[54px] bg-ft-blue-500 rounded-[10px] grid place-items-center text-base text-ft-white font-semibold"
          >
            Sign in
          </button>
          <p className="text-base font-normal text-ft-black">
            Don’t Have an Account?{" "}
            <Link to={"/"} className="text-ft-blue-500 font-medium">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
