import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [allowLogin, setAllowLogin] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user
    loginUser(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        navigate(from);
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  // Handle captcha
  const handleCaptcha = (e) => {
    const user_captcha = e.target.value;
    if (validateCaptcha(user_captcha)) {
      setAllowLogin(false);
      toast.success("Captcha verified")
    } else {
      setAllowLogin(true);
      e.target.value = "";
      toast.error("Wrong captcha")
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="bg-loginBg bg-no-repeat bg-cover">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="container mx-auto py-20 grid md:grid-cols-2 gap-6 items-center">
        <figure>
          <img src={loginImg} alt="Picture" />
        </figure>
        <div>
          <form onSubmit={handleLoginForm} className="space-y-4">
            {/* Your email */}
            <div>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                id="email"
                required
              />
            </div>
            {/* Your password */}
            <div>
              <label htmlFor="password">Your password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                  id="password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-4 right-2 text-xl"
                >
                  {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
            </div>
            {/* Generate a captcha */}
            <div>
              <LoadCanvasTemplate />
            </div>
            {/* Enter the captcha */}
            <div>
              <label htmlFor="captcha">Type captcha</label>
              <input onBlur={handleCaptcha}
                type="text"
                name="captcha"
                placeholder="Enter the captcha"
                className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                id="captcha"
              />
            </div>
            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className={`w-full ${
                  allowLogin ? "opacity-50" : ""
                } bg-[#D1A054B2] text-white text-lg tracking-wider font-medium py-1 md:py-3 px-2 md:px-4 mt-6 focus:outline-none rounded-md`}
                disabled={allowLogin}
              >
                Sing In
              </button>
            </div>
          </form>
          <p className="text-center text-[#D1A054] mt-6">
            New here?
            <Link to={"/register"}> Create a new account</Link>
          </p>
          <p className="mt-4 text-center">Or sign in with</p>
          <div className="flex justify-center gap-4 mt-4">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
