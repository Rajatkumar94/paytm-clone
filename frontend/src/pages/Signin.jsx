import React from "react";
import BottomHeading from "../components/BottomHeading";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import SubHeading from "../components/SubHeading";

function Signin() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex justify-center items-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign In" />
          <SubHeading label="Enter your credential to access ypur account" />
          <InputField
            label="Email"
            type="text"
            placeholder="example@gmail.com"
          />
          <InputField label="Password" type="text" placeholder="John" />
          <Button label="Sign in" />
          <BottomHeading
            label="Don't have an account?"
            buttonText="Sign-Up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
