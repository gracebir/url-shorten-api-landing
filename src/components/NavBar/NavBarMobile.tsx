import React from "react";

const navItems = ["Features", "Pricing", "Resources"];
const navButtons = ["Login", "Sign Up"];

function NavBarMobile() {
  return (
    <div className="absolute h-screen left-0 w-full top-24 transition-all ease-out duration-500 md:hidden">
      <div className="relative bg-bgDarkViolet h-[45vh] w-[85%] mx-auto rounded-xl px-8 py-8 text-white">
        <div className="flex flex-col items-center gap-7">
          {navItems.map((navItem, i) => (
            <li className="list-none font-bold" key={i}>
              <a className="text-xl" href={`#${navItem}`}>{navItem}</a>
            </li>
          ))}
          <div className="border w-full border-clGrayish"></div>
        <div className="flex flex-col tex-2xl w-full font-bold items-center">
          {navButtons.map((navButton, i) => (
            <a className={`px-3 py-4 hover:bg-clCyan w-full text-center rounded-full`} key={i} href={`#${navButton}`}>
              {navButton}
            </a>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default NavBarMobile;
