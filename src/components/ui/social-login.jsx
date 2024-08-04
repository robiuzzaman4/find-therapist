import google from "../../assets/icons/google.svg";
import fb from "../../assets/icons/fb.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/auth-provider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();

  // handling sign in with facebook
  const hanldeFacebookSignin = () => {
    toast.info("Sign in with Facebook is not implemented!");
  };

  // handling sign in with google
  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="grid gap-8">
      <div className="flex items-center justify-center lg:justify-start gap-10 md:gap-12">
        <button
          onClick={handleGoogleSignin}
          className="w-[150px] md:w-[178px] h-[54px] bg-gradient-to-br from-[#E4E4E4] to-[#ffffff] rounded-[10px] flex items-center justify-center gap-[14px] text-base text-ft-black font-normal shadow-md"
        >
          <img src={google} alt="google logo" className="h-5 w-5" />
          <p className="text-base text-ft-black font-normal">Google</p>
        </button>
        <button
          onClick={hanldeFacebookSignin}
          className="w-[150px] md:w-[178px] h-[54px] bg-gradient-to-br from-[#298FFF] to-[#0778F5] rounded-[10px] flex items-center justify-center gap-[14px] text-base  font-normal shadow-md"
        >
          <img src={fb} alt="facebook logo" className="h-5 w-5" />
          <p className="text-base text-ft-white font-normal">Facebook</p>
        </button>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <span className="h-px w-full bg-ft-gray-200" />
        <p className="text-sm font-normal text-ft-gray-500 whitespace-nowrap">
          Or Continue with Email
        </p>
        <span className="h-px w-full bg-ft-gray-200" />
      </div>
    </div>
  );
};

export default SocialLogin;
