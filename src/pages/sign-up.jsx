import rootImage from "../assets/images/root-bg.svg";
import logo from "../assets/icons/logo.svg";
import Container from "../components/container";
import SignUpForm from "../components/sign-up-form";
const SignUp = () => {
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
                Sign In To Your Account
              </h2>
              <p className="text-base leading-[28px] font-normal text-ft-gray-500">
                welcome Back! By click the sign up button, you&apos;re agree to
                Zenitood Terms and Service and acknlowledge the{" "}
                <span className="text-ft-blue-400">Privacy and Policy</span>
              </p>
            </div>
            {/* signup form */}
            <SignUpForm/>
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
              <div className="bg-ft-black/50 py-[30px] px-[35px] backdrop-blur-lg p-4 absolute top-[50%] grid place-items-center gap-1 rounded-[10px]">
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
  );
};

export default SignUp;
