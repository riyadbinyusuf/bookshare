import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useParams,
  // Redirect
} from "react-router-dom";
import { AuthProvider } from "../utilities/auth";
// import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import styles from "./App.module.css";
// import { NavbarMenu, BookLists, Footer } from "./components";
// import Header from "./layouts/Header/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
// import { NavbarMenu, Footer } from "./components";
// import BookDetails from "./components/BookLists/BookDetails";
import SinglePage from "./pages/SinglePage";
import SearchPage from "./pages/SearchPage";
import LendBookPage from "./pages/LendBookPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/book/:id">
            <SinglePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/upload">
            <LendBookPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
