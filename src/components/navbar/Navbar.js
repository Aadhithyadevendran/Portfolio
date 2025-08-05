import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMoon, FaSun } from "react-icons/fa";
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
    <div className="w-full h-[80px] sticky top-0 z-50 bg-white dark:bg-bodyColor text-black dark:text-white mx-auto flex justify-between items-center font-titleFont border-b border-gray-300 dark:border-gray-600">
      <div className="ml-3">
        <img
          src={logo}
          alt="logo"
          className="w-10 md:w-14 h-auto object-contain"
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-10">
          {navLinksdata.map(({ _id, title, link, isToggle }) =>
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
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
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
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-white dark:bg-gray-900 text-black dark:text-white p-4 scrollbar-hide">
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
                      className="text-xl cursor-pointer text-gray-600 dark:text-gray-400 hover:text-designColor duration-300"
                    >
                      {theme === "dark" ? <FaSun /> : <FaMoon />}
                    </li>
                  ) : (
                    <li
                      key={item._id}
                      className="text-base font-normal text-gray-600 dark:text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
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
