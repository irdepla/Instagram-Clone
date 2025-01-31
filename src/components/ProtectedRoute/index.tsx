import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate, } from "react-router";


const ProtectedRoute = ({children} : {children: ReactElement}) => {
       const token =  useSelector((state: any) => state.auth.token)
       return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
