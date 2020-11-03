import React from "react";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";
import { useParams } from "react-router-dom";
import BookDetails from "../components/BookLists/BookDetails";
import { NavbarMenu, Footer } from "../components";

const SinglePage = () => {
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }
  let { id } = useParams();

  console.log(useParams());

  return (
    <>
      <NavbarMenu />
      <BookDetails />
      <Footer />
    </>
  );
};

export default SinglePage;
