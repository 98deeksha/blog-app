import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const result = res.data;
        setUsers(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Users - {users.length}</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
