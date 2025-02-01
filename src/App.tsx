import { useEffect } from "react";
import Router from "./router";
import { useSelector } from "react-redux";
import { apiClient } from "./config/api.config";

function App() {
  const token = useSelector((state: any) => state.auth.token)
  useEffect(() => {
    apiClient.defaults.headers.common["Authorization"] =
            "Bearer" + token
  }, [token]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
