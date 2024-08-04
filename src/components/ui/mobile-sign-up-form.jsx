import logo from "../../assets/icons/logo.svg";
import SignUpForm from "./sign-up-form";

const MobileSignupForm = () => {
  return (
    <div className="h-full w-full relative min-h-screen">
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
      <div className="mt-16 bg-ft-white rounded-t-lg px-4 pt-8 pb-6">
        <h1 className="text-center text-ft-black text-[28px] font-semibold">
          Sign Up
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default MobileSignupForm;
