import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#0C4479] p-2 flex items-center justify-center top-0 sticky z-50">
      <Image
        src={logo} // The logo file you imported
        alt="Logo" // Descriptive text for the image
        width={220} // Set the width you prefer
        height={220} // Set the height you prefer
      />
    </div>
  );
};

export default Header;
