import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { firebase, provider } from "../../../utilities/firebase";
// import { AuthContext } from "../../../utilities/auth";

import cx from "classnames";
import styles from "./Account.module.css";

const Signup = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        //   .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const handleLoginWithGoogle = useCallback(
    async event => {
      event.preventDefault();
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          console.log(token);
          // The signed-in user info.
          //   let user = result.user;
          // ...
          history.push("/");
        })
        .catch(function(error) {
          // // Handle Errors here.
          // let errorCode = error.code;
          // let errorMessage = error.message;
          // // The email of the user's account used.
          // let email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // let credential = error.credential;
          // ...
          console.log(error.message);
        });
    },
    [history]
  );

  //   const { currentUser } = useContext(AuthContext);

  //   if (currentUser) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <div className="card bg-light">
      <div className="card-body mx-auto">
        <h4 className="card-title mt-3 text-center">Create Account</h4>
        <p className="text-center">Get started with your free account</p>
        <p>
          <button
            onClick={handleLoginWithGoogle}
            className={cx("btn btn-block", styles.btn_google)}
          >
            {" "}
            <i className="fab fa-google" />   Login via Google
          </button>
          {/* <Link to="/" className="btn btn-block btn-facebook">
            {" "}
            <i className="fab fa-facebook-f" />   Login via facebook
          </Link> */}
        </p>
        <p className="divider-text">
          <span className="bg-light">OR</span>
        </p>
        <form onSubmit={handleLogin}>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-user" />{" "}
              </span>
            </div>
            <input
              name="name"
              className="form-control"
              placeholder="Full name"
              type="text"
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-envelope" />{" "}
              </span>
            </div>
            <input
              name="email"
              className="form-control"
              placeholder="Email address"
              type="email"
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-phone" />{" "}
              </span>
            </div>
            <select className="custom-select">
              <option defaultValue="+880">+880</option>
              {/* <option value="1">+972</option>
              <option value="2">+198</option>
              <option value="3">+701</option> */}
            </select>
            <input
              name="phoneNumber"
              className="form-control"
              placeholder="Phone number"
              type="text"
            />
          </div>
          {/* <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-building" />{" "}
              </span>
            </div>
            <select className="form-control">
              <option selected=""> Select job type</option>
              <option>Designer</option>
              <option>Manager</option>
              <option>Accaunting</option>
            </select>
          </div> */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock" />{" "}
              </span>
            </div>
            <input
              name="password"
              className="form-control"
              placeholder="Create password"
              type="password"
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock" />{" "}
              </span>
            </div>
            <input
              name="repeatPassword"
              className="form-control"
              placeholder="Repeat password"
              type="password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Create Account{" "}
            </button>
          </div>
          <p className="text-center">
            Have an account? <Link to="/login">Log In</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Signup);
