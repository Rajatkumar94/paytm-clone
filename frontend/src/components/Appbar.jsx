import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Appbar({ username }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4 pt-4">
        PayTM App
      </div>
      <div className="flex pr-5">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello {username}
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {username[0].toUpperCase()}
          </div>
        </div>
        <button
          className="btn"
          onClick={(e) => {
            localStorage.setItem("token", "");
            navigate("/signin");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Appbar;
