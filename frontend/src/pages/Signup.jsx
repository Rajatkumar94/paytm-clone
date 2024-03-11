import React from "react";
import BottomHeading from "../components/BottomHeading";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import SubHeading from "../components/SubHeading";

function Signup() {
  return (
    <div className="">
      <Heading label="Signup" />
      <SubHeading label="Enter your infomation to create an account" />
      <InputField label="First Name" type="text" placeholder="John" />
      <InputField label="Last Name" type="text" placeholder="Wick" />
      <InputField label="Email" type="text" placeholder="example@gmail.com" />
      <InputField label="Password" type="text" placeholder="John" />
      <Button label="Sign Up" />
      <BottomHeading
        label="Already have an account?"
        buttonText="Sign-in"
        to="/signin"
      />
    </div>
  );
}

export default Signup;
