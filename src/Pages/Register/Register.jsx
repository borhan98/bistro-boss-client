import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../assets/others/authentication2.png";
import { useContext, useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const to = location.state?.from?.pathname || "/";

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // create user
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            const newUser = { name, email };
            axiosPublic.post("/users", newUser).then((res) => {
              if (res.data.insertedId) {
                toast.success("Registration successful", {
                  style: {
                    background: "#000",
                    color: "#FFF",
                  },
                });
                navigate(to)
              }
            });
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-loginBg bg-no-repeat bg-cover">
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="container mx-auto py-20 grid md:grid-cols-2 gap-6 items-center">
        <figure className="order-last">
          <img src={registerImg} alt="Picture" />
        </figure>
        <div className="order-first">
          <form onSubmit={handleRegisterForm} className="space-y-4">
            {/* Your Name */}
            <div>
              <label htmlFor="name">Your name</label>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                id="name"
                required
              />
            </div>
            {/* Your photo URL */}
            <div>
              <label htmlFor="photo">Photo URL</label>
              <input
                type="photo"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                id="photo"
                required
              />
            </div>
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
            {/* Youre password */}
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
            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className={`w-full bg-[#D1A054B2] text-white text-lg tracking-wider font-medium py-1 md:py-3 px-2 md:px-4 mt-6 focus:outline-none rounded-md`}
              >
                Sing Up
              </button>
            </div>
          </form>
          <p className="text-center text-[#D1A054] mt-6">
            Already have an account?
            <Link to={"/login"}> Sign In</Link>
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

export default Register;
