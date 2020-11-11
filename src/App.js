import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import SessionContext from "./contexts/SessionContext";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./pages/AdminPage";
import AdminSignUp from "./components/AdminSignUp";
import AddMeal from "./components/AddMeal";
import MealPage from "./pages/MealPage"
import FooterPage from "./pages/FooterPage";
import TestimonialsPage from "./pages/TestimonialsPage";

export const url = "https://cookit-cookit-cookit.herokuapp.com/api/v1";

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [imgUrl, setUrl] = useState();
  const [signUp, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.jwt);
  const [adminLoggedIn, setAdminLoggedIn] = useState(localStorage.jwtAdmin);
  const [showAdminSignUpModal, setShowAdminSignUpModal] = useState(false);
  const [meals, setMeals] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showAddMealModal, setShowAddMealModal] = useState(false);
  const [ingredients, setIngredients] = useState(false);
  const [prepTime, setPrepTime] = useState(false);
  const [cookware, setCookware] = useState(false);

  //Functions
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignUpModal = () => setShowSignUpModal(!showSignUpModal);
  const toggleLogIn = () => setLoggedIn(!loggedIn);
  const toggleSignUp = () => setSignUp(!signUp);
  const toggleAdminModal = () => setShowAdminModal(!showAdminModal);
  const toggleAdminLogin = () => setAdminLoggedIn(!adminLoggedIn);
  const toggleAdminSignUpModal = () => setShowAdminSignUpModal(!showAdminSignUpModal);
  const toggleShowAddMealModal = () => setShowAddMealModal(!showAddMealModal);

  return (
    <div className="main">
      <SessionContext.Provider
        value={{
          name,
          setName,
          password,
          setPassword,
          email,
          setEmail,
          signUp,
          setSignUp,
          loggedIn,
          setLoggedIn,
          toggleLogIn,
          toggleSignUp,
          toggleSignUpModal,
          showLoginModal,
          showSignUpModal,
          toggleLoginModal,
          meals,
          setMeals,
          toggleAdminModal,
          showAdminModal,
          toggleAdminLogin,
          adminLoggedIn,
          setAdminLoggedIn,
          showAdminSignUpModal,
          toggleAdminSignUpModal,
          showAddMealModal,
          toggleShowAddMealModal,
          setIngredients,
          prepTime,
          cookware,
          setPrepTime,
          setCookware,
          ingredients,
          imgUrl,
          setUrl,
        }}
      >
        <Navbar />
  
        <Switch>
          <Route exact path = "/" render={() => <HomePage />} />
          <Route path = "/meal/:id" render={() => <MealPage/>} />
          <Route path = "/admin" render={() => <AdminPage/>} />
          <Route path = "/testimonials" render={() => <TestimonialsPage />} />
          <Route path = "/footer" render={() => <FooterPage />} />
        </Switch>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
