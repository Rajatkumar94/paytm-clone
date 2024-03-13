import axios from "axios";
import React, { useState } from "react";
import BottomHeading from "../components/BottomHeading";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import SubHeading from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [signUser, setSignUser] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUser({ ...signUser, [name]: value });
    console.log(signUser);
  };

  const handleSignin = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/app/v1/user/signin",
        signUser
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard?username=" + signUser.username);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex justify-center items-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign In" />
          <SubHeading label="Enter your credential to access ypur account" />
          <InputField
            label="Email"
            type="text"
            name={"username"}
            value={signUser.username}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
          />
          <InputField
            label="Password"
            type="text"
            name={"password"}
            value={signUser.password}
            onChange={handleInputChange}
            placeholder="John"
          />
          <Button label="Sign in" onClick={handleSignin} />
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
