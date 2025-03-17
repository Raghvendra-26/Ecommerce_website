import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {signOut, getAuth } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils"; // Import the auth from firebase.utils
import "./navbar.scss";
import logo from "../../assets/crown.svg";

function Navbar({ currentUser }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const auth = getAuth(); // Get the auth instance

    try {
      await signOut(auth); // Sign out the user
      console.log("User signed out successfully"); // Console log success

      // Redirect to the sign-in page
      navigate("/signin"); 
    } catch (error) {
      console.error("Error signing out:", error); // Log any error
    }
  };

  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
