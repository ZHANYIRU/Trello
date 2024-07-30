import React from "react";
import Image from "next/image";
function Header() {
  return (
    <header className="flex h-48 bg-customBlack p-3">
      <div className="flex items-center gap-x-2 font-bold text-xl cursor-pointer">
        <div className="w-4 h-4 bg-titleColor rounded " />
        <p className="text-titleColor">Trello</p>
      </div>
    </header>
  );
}

export default Header;
