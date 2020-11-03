import React from "react";
// import { useParams } from "react-router-dom";
import { NavbarMenu, Footer, BookLists } from "../components";

const LoginPage = () => {
  // const { city } = useParams();
  // alert(city);
  return (
    <>
      <NavbarMenu />
      <BookLists />
      <Footer />
    </>
  );
};

export default LoginPage;
