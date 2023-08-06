/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get(`/users?page=${id}`);
      setUsers(result.data.data);
    };
    getUsers();
    console.log(id);
  }, [id]);

  return (
    <div className="user-list">
      <ul>
        {users ? (
          users.map((user) => (
            <li key={user.id}>
              <p>First Name: {user.first_name}</p>
              <p>Last Name: {user.last_name}</p>
              <Link to={`/users/detail/${user.id}`}>
                <Button text="Detail" />
              </Link>
            </li>
          ))
        ) : (
          <div>loading..</div>
        )}
      </ul>

      <div className="pages">
        <Link to={`/users/page/1`}>
          <Button text="1" />
        </Link>
        <Link to={`/users/page/2`}>
          <Button text="2" />
        </Link>
      </div>
    </div>
  );
};

export default Users;
