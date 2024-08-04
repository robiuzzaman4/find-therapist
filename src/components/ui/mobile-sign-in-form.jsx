import logo from "../../assets/icons/logo.svg";
import SignInForm from "./sign-in-form";
import SocialLogin from "./social-login";

const MobileSigninForm = () => {
  return (
    <div className="h-full w-full relative">
      {/* top section */}
      <div className="grid gap-6">
        <img
          src={logo}
          alt="logo"
          className="h-[45px] w-[109px] object-contain mx-auto"
        />
        <span className="text-ft-white">
          <p className="text-lg text-center font-semibold">Create Account</p>
          <p className="text-lg text-center font-medium">
            Fill in Your Information
          </p>
        </span>
      </div>
      {/* bottom section */}
      <div className="mt-16 bg-ft-white rounded-t-lg px-4 pt-8 pb-12">
        <h1 className="text-center text-ft-black text-[28px] font-semibold">
          Log In To Your Account
        </h1>
        <p className="text-sm text-ft-gray-500 text-center">
          Welcome Back! Select a method to log in:
        </p>
        <div className="w-full mx-auto py-[50px]">
          <SocialLogin />
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default MobileSigninForm;
