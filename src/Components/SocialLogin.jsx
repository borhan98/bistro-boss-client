import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const to = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        if (res.user) {
          navigate(to);
          const newUser = {
            name: res.user?.displayName,
            email: res.user?.email,
          };
          // POST new user to database
          axiosPublic.post("/users", newUser).then((res) => {
            console.log(res.data);
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="p-2 rounded-md bg-[#D1A054] text-white"
      >
        <FaGoogle />
      </button>
      <button className="p-2 rounded-md bg-[#D1A054] text-white">
        <FaFacebook />
      </button>
      <button className="p-2 rounded-md bg-[#D1A054] text-white">
        <FaGithub />
      </button>
    </>
  );
};

export default SocialLogin;
