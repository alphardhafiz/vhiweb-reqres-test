// import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UsersDetail from "./pages/UsersDetail";
import Error404 from "./pages/Error404";

axios.defaults.baseURL = "https://reqres.in/api";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="users/page/:id" element={<Users />} />
        <Route path="users/page/*" element={<Error404 />} />
        <Route path="users/detail/:id" element={<UsersDetail />} />
        <Route path="users/detail/*" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
