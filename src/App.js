import React from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { isAuthenticated } from "./store/selector/auth.Selector";
import Login from "./views/auth/Login";

const App = () => {
  const state = useSelector((state) => state);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            isAuthenticated(state) ? (
              <DefaultLayout onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
