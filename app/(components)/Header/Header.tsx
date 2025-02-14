import React from "react";
import Image from "next/image";
function Header() {
  return (
    <header className="flex h-48 bg-custom-black p-3 border-b border-[#32373d]">
      <div className="flex items-center gap-x-2 font-bold text-xl cursor-pointer">
        <div className="w-4 h-4 bg-custom-title rounded " />
        <p className="text-custom-title">Trello</p>
      </div>
    </header>
  );
}

export default Header;
