import React, { useState } from "react";
import {
  FaChartPie,
  FaClipboardList,
  FaFolderOpen,
  FaHome,
  FaHospitalUser,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdCash } from "react-icons/io";
import { RiFolderUserFill, RiSettings4Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const commonLinkClasses =
  "flex items-cCenter rounded-md cursor-pointer whitespace-nowrap";
const commonIconClasses = "h-5 w-5";
const commonTextClasses = "text-sm cursor-pointer";

const SidebarItem = ({ to, icon, text, show }) => (
  <Link
    to={to}
    className={`${commonLinkClasses} ${
      show ? "justify-center" : ""
    } hover:bg-gray-200 hover:text-green-600 gap-2 px-3 py-2`}
  >
    {icon}
    {!show && text}
  </Link>
);

const commonSidebarItems = [
  { icon: <FaHome className={commonIconClasses} />, text: "Home" },
  {
    icon: <FaClipboardList className={commonIconClasses} />,
    text: "Current Orders",
  },
  {
    icon: <FaFolderOpen className={commonIconClasses} />,
    text: "Order History",
  },
  {
    icon: <FaHospitalUser className={commonIconClasses} />,
    text: "Staff Shift",
  },
];

const adminSidebarItems = [
  { icon: <ImSpoonKnife className={commonIconClasses} />, text: "Manage Menu" },
  {
    icon: <RiFolderUserFill className={commonIconClasses} />,
    text: "Manage Staff",
  },
  {
    icon: <FaChartPie className={commonIconClasses} />,
    text: "Statistics",
  },
  {
    icon: <IoMdCash className={commonIconClasses} />,
    text: "Billing & Taxes",
  },
];

const AppSidebar = () => {
  const { auth } = useSelector((state) => state);
  const [showSettingsIcon, setShowSettingsIcon] = useState(false);

  const toggleSettingsIcon = () => {
    setShowSettingsIcon(!showSettingsIcon);
  };

  const sidebarWidth = showSettingsIcon ? "w-20" : "w-64";
  const justifyContent = showSettingsIcon ? "justify-center" : "justify-start";

  return (
    <div
      className={`bg-white text-black ${sidebarWidth} h-full overflow-x-hidden shadow-md transition-all duration-500`}
    >
      <div className={`h-full w-full flex flex-col ${justifyContent}`}>
        <nav className="flex-1 overflow-y-auto py-3 px-2 overflow-x-hidden">
          <h3
            className={`h-9 pb-2 pt-3 px-3 text-xs text-gray-500 text-ellipsis overflow-hidden break-all font-bold ${
              showSettingsIcon ? "text-center" : ""
            }`}
          >
            MAIN
          </h3>
          {commonSidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              to="/"
              icon={item.icon}
              text={item.text}
              show={showSettingsIcon}
            />
          ))}
          {auth?.role === "ADMIN" && (
            <>
              <h3
                className={`h-9 pb-2 pt-3 px-3 text-xs text-gray-500 text-ellipsis overflow-hidden break-all font-bold ${
                  showSettingsIcon ? "text-center" : ""
                }`}
              >
                PLUS
              </h3>
              {adminSidebarItems.map((item, index) => (
                <SidebarItem
                  key={index}
                  to="/"
                  icon={item.icon}
                  text={item.text}
                  show={showSettingsIcon}
                />
              ))}
            </>
          )}
        </nav>
        <div className="pt-2">
          <div
            className={`${commonTextClasses} w-full gap-2 px-3 py-3`}
            onClick={toggleSettingsIcon}
          >
            <div className="bg-gray-200 hover:bg-gray-300 hover:text-green-600 w-full text-center flex items-center justify-center rounded-md group-ui-open:bg-gray-200">
              <SidebarItem
                to="/"
                icon={<RiSettings4Fill className={commonIconClasses} />}
                text="Settings"
                show={showSettingsIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AppSidebar);
