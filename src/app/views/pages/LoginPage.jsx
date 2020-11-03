import React from "react";
// import { Redirect } from "react-router-dom";
import { AuthProvider } from "../../utilities/auth";
import Login from "../components/Account/Login";
import { NavbarMenu, Footer } from "../components";

const LoginPage = () => {
  return (
    <AuthProvider>
      <NavbarMenu />
      <Login />
      <Footer />
    </AuthProvider>
  );
};

export default LoginPage;
