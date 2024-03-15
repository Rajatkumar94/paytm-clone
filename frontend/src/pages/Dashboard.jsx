import axios from "axios";
import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchParams] = useSearchParams();

  const username = searchParams.get("username");

  useEffect(() => {}, []);
  return (
    <div>
      <Appbar username={username} />
      <Balance />
      <Users />
    </div>
  );
}

export default Dashboard;
