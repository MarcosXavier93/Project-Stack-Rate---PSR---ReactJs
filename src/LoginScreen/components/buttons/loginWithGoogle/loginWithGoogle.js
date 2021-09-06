import React, { useContext, useState } from "react";
import { SessionContext, getSession } from "../../../../session";
import "./loginWithGoogleStyle.css";
import googleWhiteLogo from "../../../assets/google_white_logo150x150.png";
import GoogleLogin from "react-google-login";

async function createUser(googleId, profileObj) {
  console.log("Creating user...");
  const newUser = JSON.stringify({
    _id: googleId,
    name: profileObj.email,
    description: "",
    background: null,
    avatar: profileObj.imageUrl,
    animes: [],
  });

  const { insertedId } = await fetch(`http://localhost:8080/user`, {
    method: "POST",
    body: newUser,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response?.json());

  return insertedId;
}

const LoginWithGoogle = () => {
  const { setUser } = useContext(SessionContext);

  const responseGoogleSuccess = async (response) => {
    console.log("Success login");
    const { googleId, profileObj } = response;

    let result = await fetch(`http://localhost:8080/user/${googleId}`, { method: "GET" })
      .then((response) => response?.json())
      .catch((err) => console.log("User not found."));

    if (result) {
      setUser(result);
    } else {
      let userId = await createUser(googleId, profileObj);
      console.log(userId);

      fetch(`http://localhost:8080/user/${userId}`, { method: "GET" })
        .then((response) => response?.json())
        .then((data) => setUser(data));
    }
  };

  const responseGoogleFailed = (response) => {
    console.log("Failed login");
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="46422004103-nj4h63kmkb9tqba6n1dvvicad35d8o57.apps.googleusercontent.com"
      render={(renderProps) => (
        <button onClick={renderProps.onClick} className="login-with-google-button">
          <img src={googleWhiteLogo} alt="Google Logo" />
          <span className="login-with-google-text">Login With Google</span>
        </button>
      )}
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailed}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginWithGoogle;
