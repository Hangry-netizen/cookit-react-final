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
    localStorage.removeItem("admin_id");
    setAdminLoggedIn(false);
    history.push("/");
  };

  const handleUserLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    setLoggedIn(false)
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
          height: "9vh",
          backgroundColor: "#6a6a6a",
          opacity: "0.6",
          fontSize: "",
        }}
        expand="md"
      >
        <NavLink to="/" img style={{ height: "120%" }} src={logo} ></NavLink>
        {localStorage.getItem('jwtAdmin') ? (
          <NavLink className="inactive" id="link" onClick={handleAdminLogout}>
            Logout Admin
          </NavLink>
        ) : (
          <NavLink className="inactive" id="link" onClick={toggleAdminModal}>
            Admin Login
          </NavLink>
        )}

        <Nav className="ml-auto">
          {localStorage.getItem('jwt') ? (
            <NavLink className="inactive" id="link" onClick={handleUserLogout}>
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink
                className="inactive"
                id="link"
                onClick={toggleLoginModal}
              >
                Login
              </NavLink>
              <NavLink
                className="inactive"
                id="link"
                onClick={toggleSignUpModal}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
