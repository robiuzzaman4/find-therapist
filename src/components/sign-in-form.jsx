import { useContext, useState } from "react";
import eyeNone from "../assets/icons/eye-none.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../provider/auth-provider";

const SignInForm = () => {
  const [togglePassShow, setTogglePassShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle sign in
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign up user
    try {
      setLoading(true);
      userLogin(email, password)
        .then((result) => {
          const logedInUser = result?.user;
          console.log(logedInUser);
          form.reset();
          navigate("/dashboard");
          toast.success("User Signin Successfull!");
          setLoading(false);
        })
        .catch((error) => {
          if (error.message === "Firebase: Error (auth/invalid-credential).") {
            toast.error("Invalid Credential!");
          }
          setLoading(false);
        });
    } catch (error) {
      console.log("user signin error: ", error);
      setLoading(false);
    }
  };
  return (
    <div className="grid gap-4">
      <form onSubmit={handleSignIn} className="grid gap-6">
        {/* email filed */}
        <label className="grid gap-4">
          <p className="text-base text-ft-black font-medium">Email</p>
          <input
            name="email"
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
              name="password"
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
          <p className="text-ft-blue-500 text-sm font-medium cursor-pointer">
            Forget Password?
          </p>
        </div>
        {/* submit btn and navigate link */}
        <div className="w-full grid place-items-center gap-4">
          <button
            disabled={loading}
            type="submit"
            className="w-[270px] h-[54px] bg-ft-blue-500 rounded-[10px] grid place-items-center text-base text-ft-white font-semibold disabled:cursor-not-allowed disabled:opacity-50"
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
