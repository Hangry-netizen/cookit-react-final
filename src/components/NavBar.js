import React, { useContext } from "react";
import "./NavBar.css";
import SessionContext from "../contexts/SessionContext";
import { useHistory } from "react-router-dom";

import { Navbar, Nav, NavLink } from "reactstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminLogin from "./AdminLogin";
import AdminSignUp from "./AdminSignUp";

import logo from "../assets/logo.png";

export default function NavBar() {
  let history = useHistory();

  const {
    setLoggedIn,
    loggedIn,
    toggleLoginModal,
    toggleSignUpModal,
    toggleAdminModal,
    adminLoggedIn,
    setAdminLoggedIn,
  } = useContext(SessionContext);

  const handleAdminLogout = () => {
    localStorage.removeItem("jwtAdmin");
    setAdminLoggedIn(false);
    history.push("/");
  };

  const handleUserLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  return (
    <div>
      <Login />
      <SignUp />
      <AdminLogin />
      <AdminSignUp />
      <Navbar
        fixed="top"
        style={{
          borderBottom: "3px solid #555",
          height: "9vh",
          backgroundColor: "#555",
          opacity: "0.8",
          fontSize: "20%",
        }}
        expand="md"
      >
        <img style={{ height: "30px" }} src={logo} />
        {adminLoggedIn ? (
          <NavLink className="inactive" onClick={handleAdminLogout}>
            Logout Admin
          </NavLink>
        ) : (
          <NavLink className="inactive" onClick={toggleAdminModal}>
            Admin Login
          </NavLink>
        )}

        <Nav className="ml-auto">
          {loggedIn ? (
            <NavLink className="inactive" onClick={handleUserLogout}>
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink className="inactive" onClick={toggleLoginModal}>
                Login
              </NavLink>
              <NavLink className="inactive" onClick={toggleSignUpModal}>
                Sign Up
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
