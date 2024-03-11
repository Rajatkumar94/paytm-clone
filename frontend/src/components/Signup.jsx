import React from "react";
import BottomHeading from "./BottomHeading";
import Button from "./Button";
import Heading from "./Heading";
import InputField from "./InputField";
import SubHeading from "./SubHeading";

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
      <BottomHeading label="Already have an account?" buttonText="Sign-in" />
    </div>
  );
}

export default Signup;
