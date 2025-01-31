import { Route, Routes } from "react-router";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import Search from "../pages/Search";
import Login from "../pages/Auth/Login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />

          <Route element={<MainLayout />}>
            <Route path="/" element={<ProtectedRoute>
                <Home />
            </ProtectedRoute>} />
            
            <Route path="/search" element={<ProtectedRoute>
                <Search />
            </ProtectedRoute>} />
          </Route>
      </Routes>
    </>
  );
};

export default Router;
