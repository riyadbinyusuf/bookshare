import React from "react";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";

import { BookLists, NavbarMenu, Footer } from "../components/";

const Home = () => {
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <NavbarMenu />
      <BookLists />
      <Footer />
    </>
  );
};

export default Home;
