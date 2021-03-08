import NavButton from "./../components/navbutton";
import Link from "next/link";
import GCPLogo from "./../public/gcellogo.svg";
import React from "react";

export default function Navbar({ navButtons }) {
  React.useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  });
  return (
    <>
      <div class="flex justify-between md:hidden">
        <div>
          <Link href="/">
            <GCPLogo className="h-24 w-24 md:h-24 lg:h-36 lg:w-36 cursor-pointer" />
          </Link>
        </div>
        <button id="hamburger">
          <img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
          />
          <img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
          />
        </button>
      </div>
      <div className="container mx-auto max-w-lg md:max-w-3xl lg:max-w-4xl">
        <nav className="toggle hidden md:flex justify-between mt-2 md:mt-8 z-10 mb-6 md:mb-8 lg:mb-12">
          <div className="hidden md:flex">
            <Link href="/">
              <GCPLogo className="h-24 w-24 md:h-24 lg:h-36 lg:w-36 cursor-pointer" />
            </Link>
          </div>
          <div
            className="text-right block md:inline-block items-center ml-16 md:mt-6 lg:mt-12"
            id="nav-content"
          >
            {navButtons.map((button) => (
              <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                className=""
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
