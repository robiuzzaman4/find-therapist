import rootImage from "../assets/images/root-bg.svg";
import logo from "../assets/icons/logo.svg";
import Container from "../components/container";
import SignInForm from "../components/sign-in-form";
const SignIn = () => {
  return (
    <div className="min-h-screen w-full py-[100px]">
      <Container>
        <div className="w-full h-full grid lg:grid-cols-2 gap-[120px]">
          {/* left part */}
          <div className="h-full w-full flex flex-col gap-8">
            <img
              src={logo}
              alt="logo"
              className="h-[45px] w-[109px] object-contain"
            />
            <div className="grid gap-6">
              <h2 className="text-ft-black text-[30px] leading-[24px] font-semibold">
                Log In To Your Account
              </h2>
              <p className="text-base leading-[28px] font-normal text-ft-gray-500">
                Welcome Back! Select a method to log in:
              </p>
            </div>
            {/* signin form */}
            <SignInForm />
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
              <div className="bg-ft-black/50 py-[30px] px-[35px] backdrop-blur-lg p-4 absolute top-[50%] -mt-16 grid place-items-center gap-1 rounded-[10px] w-full max-w-[320px]">
                <p className="text-[22px] leading-[35px] font-semibold text-ft-blue-400">
                  Sign In{" "}
                  <span className="text-ft-white">
                    to view all the massage therapists
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
