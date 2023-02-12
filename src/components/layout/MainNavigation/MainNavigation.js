import React, { useEffect, useRef, useState } from "react";
import logo from "../../../assets/Images/logo.png";
import logoScroll from "../../../assets/Images/logoScroll.png";

// import logo2 from "../../../assets/Images/logo.png";
import "./MainNavigation.css";

function MainNavigation() {
  const [btnIsDisp, setBtnIsDisp] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const navBar = useRef();

  const handleClick = () => {
    setBtnIsDisp(!btnIsDisp);
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  useEffect(() => {
    changeLogo();
    window.addEventListener("scroll", changeLogo);
  });

  const changeLogo = () => {
    if (window.scrollY >= 66) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      navBar.current.classList.add("bg-red-700");
      document.querySelector(".navLg").classList.add("text-white");
      document.querySelector(".btnMobile").classList.add("text-white");
    } else {
      navBar.current.classList.remove("bg-red-700");
      document.querySelector(".navLg").classList.remove("text-white");
      document.querySelector(".btnMobile").classList.remove("text-white");
    }
  };

  return (
    <nav ref={navBar} className="nav w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
        <div className="relative flex items-center justify-between h-full">
          <div className="flex flex-1 items-center justify-bet sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-40 w-auto lg:hidden"
                src={isScroll ? logoScroll : logo}
                alt="Your Company"
              />
              <img
                className="hidden h-40 w-auto lg:block"
                src={isScroll ? logoScroll : logo}
                alt="Your Company"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="btnMobile inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 navLg">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#About"
                  className="hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="#Portfolio"
                  className="hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </a>

                <a
                  href="#Contact"
                  className="hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {btnIsDisp && (
        <div className="navMobile sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Home
            </a>

            <a
              href="#About"
              className=" hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>

            <a
              href="#Portfolio"
              className="hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </a>

            <a
              href="#Contact"
              className="hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MainNavigation;
