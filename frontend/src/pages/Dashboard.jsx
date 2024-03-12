import axios from "axios";
import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";

function Dashboard() {
  const [fromAccount, setFromAccount] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
      
    });
  }, []);
  return (
    <div>
      <Appbar />
      <Balance />
      <Users />
    </div>
  );
}

export default Dashboard;
