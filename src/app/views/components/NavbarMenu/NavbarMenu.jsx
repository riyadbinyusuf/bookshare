import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Redirect,
  Route
} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { firebase } from "../../../utilities/firebase";
// import LoginPage from "../../pages/LoginPage";
// import SignUpPage from "../../pages/SignUpPage";
import cx from "classnames";

// import { Brand } from 'react-bootstrap';

import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const user = firebase.auth().currentUser;
  // let location = useLocation;
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          window.location = "/";
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
  };

  // const handleGoHome = () => {
  //   return <Redirect to="/" />;
  // };

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="primary"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand>
          {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
          <h2>
            <Link to="/">BookShare</Link>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/search?=">Books</Link>
            {/* <Link to="#pricing">Reviews</Link> */}
          </Nav>
          <Nav>
            {!user && <Link to="/login">Login</Link>}
            {!user && <Link to="/signup">Sign Up</Link>}
            {user && (
              <>
                <Link
                  to="/upload"
                  className={cx(
                    styles.cstBtn,
                    "btn",
                    "btn-outline-light",
                    "btn-sm"
                  )}
                >
                  Lend a Book
                </Link>
                <NavDropdown
                  title={user.displayName ? user.displayName : "Hello"}
                  id="collasible-nav-dropdown"
                  className={styles.navbarDropdown}
                >
                  <NavDropdown.Item to="#action/3.1">Profile</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.2">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogOut}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          {/* <Route path="/admin" component={AdminNav} /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
