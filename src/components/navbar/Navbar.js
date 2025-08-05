import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-[80px] z-50 bg-white dark:bg-bodyColor text-black dark:text-white flex justify-between items-center font-titleFont border-b border-gray-300 dark:border-gray-600 px-4 sm:px-4">
     

<div className="ml-0 !ml-0 p-0">
        <img
          src={logo}
          alt="logo"
          className="w-12 sm:w-12 md:w-14 h-auto object-contain"
        />
      </div>
     
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-10">
          {navLinksdata.map(({ _id, title, link, isToggle, tab }) =>
            isToggle ? (
              <li
                key={_id}
                onClick={handleThemeToggle}
                className="text-xl cursor-pointer text-gray-600 dark:text-gray-400 hover:text-designColor duration-300"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </li>
            ) : (
              <li
                key={_id}
                className="text-base font-normal text-gray-600 dark:text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              >
                <Link
                  activeClass="active-nav"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    if (tab) {
                      const event = new CustomEvent("switchTab", {
                        detail: tab,
                      });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  {title}
                </Link>
              </li>
            )
          )}
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black dark:bg-white text-white dark:text-black w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
        >
          <FiMenu />
        </span>

        {showMenu && (
  <div className="w-[50%] max-w-[300px] h-screen overflow-scroll absolute top-0 left-0 bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 scrollbar-hide">

    <div className="flex flex-col gap-8 py-2 relative">
      <ul className="flex flex-col gap-4">
        {navLinksdata.map((item) =>
          item.isToggle ? (
            <li
              key={item._id}
              onClick={() => {
                handleThemeToggle();
                setShowMenu(false);
              }}
              className="text-l cursor-pointer text-gray-600 dark:text-gray-400 hover:text-designColor duration-300"
            >
              Theme
            </li>
          ) : (
            <li
              key={item._id}
              className="text-base font-normal text-gray-600 dark:text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                onClick={() => setShowMenu(false)}
                activeClass="active-nav"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>

      <span
        onClick={() => setShowMenu(false)}
        className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
      >
        <MdClose />
      </span>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Navbar;
