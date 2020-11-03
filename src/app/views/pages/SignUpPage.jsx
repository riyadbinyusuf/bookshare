import React from "react";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "../../utilities/auth";

import { NavbarMenu, Footer } from "../components/";
import Signup from "../components/Account/Signup";

const SignUpPage = () => {
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <React.Fragment>
      <NavbarMenu />
      <Signup />
      <Footer />
    </React.Fragment>
  );
};

export default SignUpPage;
