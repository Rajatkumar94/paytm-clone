import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/app/v1/user/bulk?filter=" + filter, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div>
      <h1>Users</h1>
      <InputField
        name={"filter"}
        placeholder={"Search users..."}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {users && users.map((user) => <User key={user._id} user={user} />)}
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          label={"Send Money"}
          onClick={(e) =>
            navigate("/send?id=" + user._id + "&name=" + user.firstName)
          }
        />
      </div>
    </div>
  );
}

export default Users;
