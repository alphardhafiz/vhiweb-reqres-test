/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get(`/users?page=${id}`);
        setUsers(result.data.data);
        if (result.data.data.length === 0) {
          navigate("/404");
        }
      } catch (error) {
        console.log(error.message);
        navigate("/404");
      }
    };
    getUsers();
  }, [id, navigate]);

  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <Link to={`/users/detail/${user.id}`}>
              <Button text="Detail" />
            </Link>
          </li>
        ))}
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
