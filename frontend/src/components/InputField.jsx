import React from "react";

function InputField({ label, type, placeholder }) {
  return (
    <div className="flex justify-center flex-col content-center">
      <div>{label}</div>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
}

export default InputField;
