import rootImage from "../assets/images/root-bg.svg";
import logo from "../assets/icons/logo.svg";
import mobileBgImg from "../assets/images/root-mobile-bg.svg";
import Container from "../components/shared/container";
import SignUpForm from "../components/ui/sign-up-form";
import { useState } from "react";
import MobileSignupForm from "../components/ui/mobile-sign-up-form";

const SignUp = () => {
  const [isShowSignUpForm, setIsShowSignUpForm] = useState(false);
  return (
    <>
      {/* desktop screen */}
      <div className="min-h-screen w-full py-[100px] hidden lg:block">
        <Container>
          <div className="w-full h-full grid lg:grid-cols-2 gap-[120px] px-4">
            {/* left part */}
            <div className="h-full w-full flex flex-col gap-8">
              <img
                src={logo}
                alt="logo"
                className="h-[45px] w-[109px] object-contain"
              />
              <div className="grid gap-6">
                <h2 className="text-ft-black text-[30px] leading-[24px] font-semibold">
                  Sign In To Your Account
                </h2>
                <p className="text-base leading-[28px] font-normal text-ft-gray-500">
                  welcome Back! By click the sign up button, you&apos;re agree
                  to Zenitood Terms and Service and acknlowledge the{" "}
                  <span className="text-ft-blue-400">Privacy and Policy</span>
                </p>
              </div>
              {/* signup form */}
              <SignUpForm />
            </div>
            {/* right part */}
            <div className="grid gap-10">
              {/* logo */}
              <div className="h-full w-full relative grid place-items-center">
                <img
                  src={rootImage}
                  alt="banner"
                  className="h-full max-h-[800px] w-full object-cover blur-[3px]"
                />
                <div className="bg-ft-black/50 py-[30px] px-[35px] backdrop-blur-lg p-4 absolute top-[50%] grid place-items-center gap-1 rounded-[10px] -mt-16 w-full max-w-[320px]">
                  <p className="text-[22px] leading-[35px] font-semibold text-ft-blue-400">
                    Create Account
                  </p>
                  <p className="text-[22px] leading-[35px] font-medium text-ft-white">
                    Fill in Your Information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* mobile screen */}
      <div className="w-full min-h-screen lg:hidden">
        {/* img */}
        <img
          src={mobileBgImg}
          alt="background"
          className="h-full w-full fixed inset-0 object-cover"
        />
        <div className="pt-16 absolute h-full w-full inset-0">
          {isShowSignUpForm ? (
            <MobileSignupForm />
          ) : (
            <div className="flex flex-col items-center gap-8 px-6">
              <img
                src={logo}
                alt="logo"
                className="h-[45px] w-[109px] object-contain mx-auto"
              />
              <span className="flex flex-col items-center gap-3">
                <h3 className="text-ft-black text-[28px] font-semibold text-center">
                  Sign In To Your Account
                </h3>
                <p className="text-base text-[#D1D1D1]">
                  Welcome Back! By click the sign up button, you&apos;re agree
                  to Zenitood Terms and Service and acknlowledge the{" "}
                  <span className="text-ft-blue-400 cursor-pointer">
                    Privacy and Policy
                  </span>
                </p>
              </span>

              <div className="bg-ft-black/50 py-[30px] px-[35px] backdrop-blur-lg p-4 grid place-items-center gap-1 rounded-[10px] w-full max-w-[320px] mt-[48px]">
                <button
                  onClick={() => setIsShowSignUpForm(true)}
                  className="text-[22px] leading-[35px] font-semibold text-ft-blue-400"
                >
                  Create Account
                </button>
                <p className="text-[22px] leading-[35px] font-medium text-ft-white">
                  Fill in Your Information
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
