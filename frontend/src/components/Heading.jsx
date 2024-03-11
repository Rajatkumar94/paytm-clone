import React from "react";

function Heading({ label, info }) {
  return (
    <div className="">
      <h1 className="font-medium text-3xl">{label}</h1>
      <p>{info}</p>
    </div>
  );
}

export default Heading;
