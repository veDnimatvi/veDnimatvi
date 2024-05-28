import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/img/mylogo.svg";
import menuIcon from "../../public/img/menu-30.png";
import menuLightIcon from "../../public/img/menu-icon.png";
import moonIcon from "../../public/img/moon-icon.png";
import sunIcon from "../../public/img/summer-icon.png";
import { useRouter } from "next/router";

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(false);
  const [mode, setMode] = useState();
  const router = useRouter();

  useEffect(() => {
    setMode(sessionStorage.getItem("theme"));
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", sessionStorage.getItem("theme"));
  }, []);

  const handleMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
    setisFirstLoad(true);
  };

  const toggleThemeChange = () => {
    if (sessionStorage.getItem("theme") === "dark") {
      sessionStorage.setItem("theme", "light");
      setMode("light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
    } else {
      sessionStorage.setItem("theme", "dark");
      setMode("dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
    }
  };

  const closeMenu = () => setOpenMenuMobile(false);
  return (
    <div>
      {openMenuMobile && (
        <>
          <div
            className="model"
            onClick={handleMenuMobile}
            aria-hidden="true"
          ></div>
        </>
      )}
      <div className="navbar-sticky">
        <div className="container flex justify-between mx-auto navbar">
          <div className="float-left pl-8 mt-1 text-2xl font-bold cursor-pointer md:mt-0">
            <Link href="/">
              <div className="flex items-center">
                <Image src={logo} alt="logo" />
                <span className="pl-2">Vitamindev</span>
              </div>
            </Link>
          </div>
          <div className="flex float-right menu-desktop ">
            <div className="text-lg cursor-pointer">
              <div
                className={
                  router?.pathname === "/"
                    ? "border-b-4 border-solid border-orange-500"
                    : ""
                }
              >
                <Link href="/">Home</Link>
              </div>
            </div>
            <div className="ml-12 text-lg cursor-pointer">
              <div
                className={
                  router?.pathname === "/about"
                    ? "border-b-4 border-solid border-orange-500"
                    : ""
                }
              >
                <Link href="/about">About</Link>
              </div>
            </div>

            <div className="ml-12 text-lg cursor-pointer">
              <div
                className={
                  router?.pathname === "/blog" ||
                  router?.pathname === "/vitamins/[blog]"
                    ? "border-b-4 border-solid border-orange-500"
                    : ""
                }
              >
                <Link href="/blog">Blog</Link>
              </div>
            </div>
            <div className="ml-12 text-lg cursor-pointer">
              <div
                className={
                  router?.pathname === "/my_channel"
                    ? "border-b-4 border-solid border-orange-500"
                    : ""
                }
              >
                <Link href="/my_channel">Youtube Channel</Link>
              </div>
            </div>
            <div className="ml-12 text-lg cursor-pointer">
              <div
                className={
                  router?.pathname === "/contact"
                    ? "border-b-4 border-solid border-orange-500"
                    : ""
                }
              >
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div
              className="mb-12 ml-10 text-xl cursor-pointer"
              onClick={toggleThemeChange}
            >
              <Image
                src={mode === "dark" ? sunIcon : moonIcon}
                alt="mode icon"
              />
            </div>
          </div>

          <div className="flex items-center float-right pt-1 mr-4 cursor-pointer menu-icon">
            <Image
              src={mode === "dark" ? sunIcon : moonIcon}
              alt="mode icon"
              onClick={toggleThemeChange}
            />
            <Image
              src={mode === "dark" ? menuLightIcon : menuIcon}
              alt="menu icon"
              onClick={handleMenuMobile}
            />
          </div>
        </div>
      </div>

      <div
        className={
          openMenuMobile
            ? "menu-open"
            : isFirstLoad
            ? "menu-close"
            : "menu-close-first"
        }
      >
        <div
          className="py-5 pl-6 mt-32 text-xl duration-500 cursor-pointer hover:bg-white hover:text-black"
          onClick={closeMenu}
        >
          <Link href="/">Home</Link>
        </div>
        <div
          className="py-5 pl-6 text-xl duration-500 cursor-pointer hover:bg-white hover:text-black"
          onClick={closeMenu}
        >
          <Link href="/about">About</Link>
        </div>

        <div
          className="py-5 pl-6 text-xl duration-500 cursor-pointer hover:bg-white hover:text-black"
          onClick={closeMenu}
        >
          <Link href="/blog">Blog</Link>
        </div>
        <div
          className="py-5 pl-6 text-xl duration-500 cursor-pointer hover:bg-white hover:text-black"
          onClick={closeMenu}
        >
          <Link href="/my_channel">Youtube Channel</Link>
        </div>
        <div
          className="py-5 pl-6 text-xl duration-500 cursor-pointer hover:bg-white hover:text-black"
          onClick={closeMenu}
        >
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
