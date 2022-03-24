import React from "react";

function Button({text, ...props}) {
  return (
    <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">{text}</button>
  );
}

export default Button;
