import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../asset/image/Logo.jpg";

const AppHeader = () => {
  const { authData } = useSelector((state) => state);
  const defaultProfilePic = Logo;

  return (
    <div className="border-b border-solid px-4 py-3 flex justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Company Logo" className="w-9 h-9 mr-2" />
        <span className="font-semibold text-lg">Restaurant Name</span>
      </div>
      <div className="flex items-center">
        <span className="text-sm mr-2">User Name</span>
        <img
          src={authData?.profilePic || defaultProfilePic}
          alt="User Profile Picture"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default AppHeader;
