import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:bg-gray-100 transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;