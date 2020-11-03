import React from "react";
// import { useParams } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavbarMenu, Footer } from "../components";
import ContainerWrapper from "../layouts/Container";

const LoginPage = () => {
  // const { city } = useParams();
  // alert(city);
  return (
    <>
      <NavbarMenu />
      <ContainerWrapper>
        <div lg={3} className="pt-5 pb-5">
          <h3>
            List your book which you want to lend another book lover who is like
            you.
          </h3>
          <h1>Here will be book upload form</h1>
        </div>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

export default LoginPage;
