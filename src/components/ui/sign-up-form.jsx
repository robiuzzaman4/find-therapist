import { useContext, useState } from "react";
import eyeNone from "../../assets/icons/eye-none.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../provider/auth-provider";
import { updateProfile } from "firebase/auth";

const SignUpForm = () => {
  const [togglePassShow, setTogglePassShow] = useState(false);
  const [toggleConfirmPassShow, setToggleConfirmPassShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userSignup } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password must be the same!");
      return;
    }

    // sign up user
    try {
      setLoading(true);
      userSignup(email, password)
        .then((result) => {
          const user = result.user;
          // update user name
          updateUser(user, name);
          form.reset();
          navigate("/signin");
          toast.success("User Signup Successfull!");
          setLoading(false);
        })
        .catch((error) => {
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            toast.error("User already exist!");
          } else if (
            error.message ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.error(" Password should be at least 6 characters!");
          }
          setLoading(false);
        });
    } catch (error) {
      console.log("user signup error: ", error);
      setLoading(false);
    }

    // update user profile with name
    const updateUser = (user, name) => {
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          console.log("updated user profile");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  };

  return (
    <div className="grid gap-4">
      <form onSubmit={handleSignUp} className="grid gap-6">
        {/* name filed */}
        <label className="grid gap-4">
          <p className="text-base text-ft-black font-medium">Name</p>
          <input
            name="name"
            type="text"
            className="w-full p-5 focus-visible:outline-none border border-ft-gray-200 rounded-[10px] text-ft-gray-500"
            placeholder="@username"
            required
          />
        </label>
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
        {/* confirm password filed */}
        <label className="grid gap-4">
          <p className="text-base text-ft-black font-medium">
            Confirm Password
          </p>
          <span className="w-full relative">
            <input
              name="confirmPassword"
              type={toggleConfirmPassShow ? "text" : "password"}
              className="w-full p-5 focus-visible:outline-none border border-ft-gray-200 rounded-[10px] text-ft-gray-500"
              placeholder="Re-type password"
              required
            />
            <img
              onClick={() => setToggleConfirmPassShow(!toggleConfirmPassShow)}
              src={eyeNone}
              alt="eye"
              className="h-6 w-6 absolute top-5 right-5 cursor-pointer"
            />
          </span>
        </label>
        {/* terms */}
        <label className="flex items-center gap-2.5 -mt-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded accent-ft-blue-400"
          />
          <p className="text-base text-ft-blue-400 font-normal">
            Accept Terms of Service
          </p>
        </label>
        {/* submit btn and navigate link */}
        <div className="w-full grid place-items-center gap-4">
          <button
            disabled={loading}
            type="submit"
            className="w-[270px] h-[54px] bg-ft-blue-400 rounded-[10px] grid place-items-center text-base text-ft-white font-semibold disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sign up
          </button>
          <p className="text-base font-normal text-ft-black">
            Already Have an Account?{" "}
            <Link to={"/signin"} className="text-ft-blue-500 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
