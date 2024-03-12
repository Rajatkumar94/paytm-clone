import React, { useState } from "react";
import BottomHeading from "../components/BottomHeading";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import SubHeading from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user, name, value);
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/app/v1/user/signup",
        user
      );
      console.log(response);
      navigate("/signin");
    } catch (err) {}
  };
  return (
    <div className="">
      <Heading label="Signup" />
      <SubHeading label="Enter your infomation to create an account" />
      <InputField
        label="First Name"
        placeholder="John"
        name={"firstName"}
        value={user.firstName}
        onChange={handleInputChange}
      />
      <InputField
        label="Last Name"
        type="text"
        placeholder="Wick"
        name={"lastName"}
        value={user.lastName}
        onChange={handleInputChange}
      />
      <InputField
        label="Email"
        type="text"
        placeholder="example@gmail.com"
        name={"username"}
        value={user.email}
        onChange={handleInputChange}
      />
      <InputField
        label="Password"
        type="text"
        placeholder="*******"
        name={"password"}
        value={user.password}
        onChange={handleInputChange}
      />
      <Button label="Sign Up" onClick={handleSubmit} />
      <BottomHeading
        label="Already have an account?"
        buttonText="Sign-in"
        to="/signin"
      />
    </div>
  );
}

export default Signup;
