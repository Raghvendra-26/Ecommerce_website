import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router";
import ShopPage from "./pages/shop/ShopPage";
import Navbar from "./components/navbar/Navbar";
import signIN_signUP from "./pages/signIn-signUp/signIN_signUP";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const auth = getAuth();  // Initialize Firebase Auth instance
    onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      console.log(user);  // Log the current user (or null if not logged in)
    });
  }


  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser}/>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={signIN_signUP} />
        </Routes>
      </div>
    );
  }
}

export default App;
