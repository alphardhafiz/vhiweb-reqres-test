import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const loginData = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/login", { email, password });
      console.log(result.data);
      setToken(result.data);
      setErrorMsg("");
    } catch (error) {
      console.log(error.response.data.error);
      setErrorMsg(error.response.data.error);
    }
  };
  useEffect(() => {
    if (token) navigate("users/page/1");
  });

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={loginData}>
        {errorMsg && <span className="error-message">{errorMsg}</span>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
