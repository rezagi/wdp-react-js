import React from "react";

function ButtonNav({text, ...props}) {
    return (
      <button class="hover:ring-white hover:bg-blue-400 hover:text-white text-gray-600 border border-white bg-gray-50 hover:outline-none hover:ring-1 hover:ring-offset-1   cursor-pointer px-3 py-2.5 font-normal text-s leading-3 shadow-md rounded nav-link-wide">{text}</button>
    );
  }

export default ButtonNav;  