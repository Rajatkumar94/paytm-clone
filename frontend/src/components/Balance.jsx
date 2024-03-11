import React from "react";

function Balance({ balance }) {
  return (
    <div className="flex justify-start">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-lg">Rs. {balance}</div>
    </div>
  );
}

export default Balance;
