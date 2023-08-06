import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const UsersDetail = () => {
  const [user, setUsers] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/users/${id}`);
        setUsers(data.data);
      } catch (error) {
        console.log(error.message);
        navigate("/404");
      }
    };
    getUser();
  }, [id]);

  return (
    <div className="detail">
      {user && (
        <div className="user-detail">
          <div className="left">
            <img src={user.avatar} alt="" />
          </div>
          <div className="right">
            <p>{user.email}</p>
            <p>
              {user.first_name} {user.last_name}
            </p>
          </div>
        </div>
      )}
      {!user && <div>loading....</div>}
      <Link to="/users/page/1" className="button-backtouserlist">
        <Button text={"Back to User List"} />
      </Link>
    </div>
  );
};

export default UsersDetail;
