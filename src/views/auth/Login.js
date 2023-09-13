import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/Logo.jpg";
import CustomInputField from "../../common/components/CustomInputField";
import { AuthActions } from "../../store/actions";
import { isAuthenticated } from "../../store/selector/auth.Selector";

const Login = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated(state)) {
      navigate("/");
    }
  }, [isAuthenticated(state), navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.login(formData));
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center flex items-center justify-center bg-gray-300">
        <div className="text-black text-center">
          {/* You can add any content you want here */}
          <h1 className="text-3xl font-semibold">
            CREATIVE IMAGE OR <br /> ILLUSTRATION
          </h1>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start p-10">
        <div className="flex items-center mb-4">
          <img src={Logo} alt="Logo" className="w-9 h-9 rounded mr-2" />
          <p className="text-xl font-semibold ">Restaurant Name</p>
        </div>

        <div className="bg-white w-full max-w-md md:mx-auto">
          <h2 className="text-3xl font-semibold mb-16">
            Welcome <br /> back!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <CustomInputField
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 relative">
              <CustomInputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="font-dm-sans font-normal text-20px leading-26.04px"
              />
              <div className="w-full text-right">
                <p className="text-gray-600">Forgot Password?</p>
              </div>
            </div>
            <div className="w-full flex justify-center mt-10">
              <button
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6 md:mt-0 w-full flex justify-between">
          <h3 className="text-left">©Company Name</h3>
          <h3 className="text-right">Terms and Conditions</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
