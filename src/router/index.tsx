import { Route, Routes } from "react-router";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />} >
        <Route path="/home" element={<Home />} />
        </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
